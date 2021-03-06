const ARLO_WEB         = 'https://arlo.netgear.com/hmsweb',
      ARLO_WEB_CLIENT  = ARLO_WEB + '/client'
      ARLO_WEB_DEVICES = ARLO_WEB + '/users/devices';

module.exports = {
    ACTION                 : 'action',
    ACTION_GET             : 'get',
    ACTION_SET             : 'set',
    ACTIVE                 : 'active',
    ACTIVITY_STATE         : 'activityState',

    CAMERA_ID              : 'cameraId',

    DEVICES                : 'devices',
    DURATION               : 'duration',

    EVENT_AUDIO            : 'audioDetected',
    EVENT_BATTERY          : 'batteryLevel',
    EVENT_CHARGING         : 'chargingState',
    EVENT_FOUND            : 'found',
    EVENT_MOTION           : 'motionDetected',
    EVENT_UPDATE           : 'update',

    EVENT_LOGGED_IN        : 'logged_in',
    EVENT_GOT_DEVICES      : 'got_devices',

    FF_SNAPSHOT            : 'fullFrameSnapshot',
    FF_SNAPSHOT_AVAILABLE  : 'fullFrameSnapshotAvailable',
    FROM                   : 'from',

    MODE_ARMED             : 'mode1',
    MODE_DISARMED          : 'mode0',

    PATTERN                : 'pattern',
    PATTERN_ALARM          : 'alarm',
    PROPERTIES             : 'properties',
    PUBLISH                : 'publishResponse',

    RESOURCE               : 'resource',
    RESOURCE_CAMERAS       : 'cameras',
    RESOURCE_MODES         : 'modes',
    RESOURCE_SIREN         : 'siren',
    RESOURCE_SUBSCRIPTIONS : 'subscriptions',

    SIREN_OFF              : 'off',
    SIREN_ON               : 'on',
    SIREN_STATE            : 'sirenState',

    TO                     : 'to',
    TRANS_ID               : 'transId',

    TYPE_ARLOQS            : 'arloqs',
    TYPE_ARLOQ             : 'arloq',
    TYPE_BASESTATION       : 'basestation',
    TYPE_CAMERA            : 'camera',
    TYPE_SIREN             : 'siren',

    VOLUME                 : 'volume',

    WEB                    : {
        CLIENT    : ARLO_WEB_CLIENT,
        DEVICES   : ARLO_WEB_DEVICES,
        LOGIN     : ARLO_WEB + '/login',
        NOTIFY    : ARLO_WEB_DEVICES + '/notify/',
        SNAPSHOT  : ARLO_WEB_DEVICES + '/fullFrameSnapshot',
        STREAM    : ARLO_WEB_DEVICES + '/startStream',
        SUBSCRIBE : ARLO_WEB_CLIENT + '/subscribe'
    },

    XCLOUD_ID              :'xCloudId'
}