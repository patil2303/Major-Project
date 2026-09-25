// Google Maps implementation with resilient fallbacks
(function() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    const defaultLat = 28.6139;
    const defaultLng = 77.2090;
    let lat = defaultLat;
    let lng = defaultLng;

    if (typeof listing !== 'undefined' && listing && listing.geometry && Array.isArray(listing.geometry.coordinates) && listing.geometry.coordinates.length === 2) {
        lng = Number(listing.geometry.coordinates[0]) || defaultLng;
        lat = Number(listing.geometry.coordinates[1]) || defaultLat;
    }

    const title = (typeof listing !== 'undefined' && listing && listing.title) ? listing.title : 'Property Location';
    const locationName = (typeof listing !== 'undefined' && listing && listing.location) ? `${listing.location}, ${listing.country || ''}` : '';

    function renderEmbedFallback() {
        if (!mapContainer) return;
        mapContainer.innerHTML = `
            <div style="width: 100%; height: 100%; min-height: 400px; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.08);">
                <iframe
                    width="100%"
                    height="400"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=13&output=embed"
                    style="border:0; border-radius: 1rem;"
                    allowfullscreen>
                </iframe>
            </div>
        `;
    }

    // Capture Google Maps auth failure (e.g. billing not activated on key)
    window.gm_authFailure = function() {
        console.warn('Google Maps API authentication notice. Rendering interactive embed fallback.');
        renderEmbedFallback();
    };

    window.initGoogleMap = function() {
        try {
            const center = { lat, lng };
            const map = new google.maps.Map(mapContainer, {
                center,
                zoom: 13,
                mapTypeControl: true,
                streetViewControl: true,
                fullscreenControl: true,
                zoomControl: true,
                styles: [
                    { featureType: "poi", stylers: [{ visibility: "simplified" }] },
                    { featureType: "transit", stylers: [{ visibility: "simplified" }] }
                ]
            });

            const marker = new google.maps.Marker({
                position: center,
                map: map,
                title: title,
                animation: google.maps.Animation.DROP
            });

            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div style="padding: 6px 10px; max-width: 240px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                        <h6 style="margin: 0 0 4px 0; font-weight: 700; color: #fe424d; font-size: 1rem;">${title}</h6>
                        <p style="margin: 0; font-size: 0.85rem; color: #555;">${locationName}</p>
                        <small style="display: block; margin-top: 4px; color: #888;">Exact location provided upon booking</small>
                    </div>
                `
            });

            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });

            infoWindow.open(map, marker);
            window.map = map;
        } catch (err) {
            console.warn('Google Maps JS API init failed:', err);
            renderEmbedFallback();
        }
    };

    const apiKey = (typeof googleMapsApiKey !== 'undefined' && googleMapsApiKey && googleMapsApiKey.trim() !== '')
        ? googleMapsApiKey.trim()
        : '';

    if (apiKey) {
        // Load Google Maps JavaScript API
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMap`;
        script.async = true;
        script.defer = true;
        script.onerror = function() {
            console.warn('Google Maps script load failed. Falling back to embed.');
            renderEmbedFallback();
        };
        document.head.appendChild(script);
    } else {
        renderEmbedFallback();
    }
})();
