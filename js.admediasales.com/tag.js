(function() {
    // Prevent multiple initializations
    if (window.__tagNamespace && window.__tagNamespace.isLoaded) return;

    // Create namespace if it doesn't exist
    window.__tagNamespace = window.__tagNamespace || {};
    window.__tagNamespace.isLoaded = true;

    // Configuration with unique names
    var __tag_retargetingConfig = {
        id: 'RTG-KX7YM2D120445',
        maxStorageEntries: 100,
        storageKey: '__tag_offRD',
        sessionTimeout: 15 * 24 * 60 * 60 * 1000
    };

    // Session data with unique names
    var __tag_sessionData = {
        id: __tag_retargetingConfig.id,
        pageUrl: window.location.href,
        referrerUrl: document.referrer || '',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height
    };

    // Functions with unique names
    function __tag_storeSessionData(data) {
        var existingData = JSON.parse(localStorage.getItem(__tag_retargetingConfig.storageKey)) || [];
        existingData.push(data);
        if (existingData.length > __tag_retargetingConfig.maxStorageEntries) {
            existingData.shift();
        }
        localStorage.setItem(__tag_retargetingConfig.storageKey, JSON.stringify(existingData));
    }

    function __tag_clearOldSessions() {
        var currentData = JSON.parse(localStorage.getItem(__tag_retargetingConfig.storageKey)) || [];
        var now = new Date();
        currentData = currentData.filter(function(entry) {
            var entryTime = new Date(entry.timestamp);
            return now - entryTime < __tag_retargetingConfig.sessionTimeout;
        });
        localStorage.setItem(__tag_retargetingConfig.storageKey, JSON.stringify(currentData));
    }

    // Storage keys with unique names
    var __tag_firstVisitKey = '__tag_firstVisitTimestamp';
    var __tag_ableToRetargetingKey = '__tag_ableToRetargeting';

    // Check first visit
    var __tag_firstVisit = localStorage.getItem(__tag_firstVisitKey);
    var __tag_now = new Date().getTime();
    var __tag_DaysMs = 600048;

    if (!__tag_firstVisit) {
        localStorage.setItem(__tag_firstVisitKey, __tag_now.toString());
    } else {
        var __tag_firstVisitTime = parseInt(__tag_firstVisit, 10);
        if (__tag_now - __tag_firstVisitTime >= __tag_DaysMs) {
            localStorage.setItem(__tag_ableToRetargetingKey, 1);
        } else {
            localStorage.setItem(__tag_ableToRetargetingKey, 0);
        }
    }

    // Initialize session data
    __tag_clearOldSessions();
    __tag_storeSessionData(__tag_sessionData);

    // Display function with unique name
    function __tag_displayRetargetingData() {
        var storedData = JSON.parse(localStorage.getItem(__tag_retargetingConfig.storageKey));
        // Add any display logic here
    }

    var s = document.createElement('script');
    s.async = 1;
    s.src = 'https://js.admediasales.com/campaigns.js?fpid=' + btoa(document.URL);

    document.head.appendChild(s);

    // Initialize display
    __tag_displayRetargetingData();



})();