var cmdHelper = require('../../../../helper/CmdHelper');

var entryFactory = require('../../../../factory/EntryFactory');

module.exports = function(element, translate, options) {

  options = options || {};

  var getBusinessObject = options.getBusinessObject;

  var historyTimeToLiveEntry = entryFactory.textField({
    id: 'historyTimeToLive',
    label: translate('History Time To Live'),
    description: '<a href="https://docs.camunda.org/manual/7.20/update/minor/719-to-720/#enforce-history-time-to-live">Learn more about time to live</a>',
    modelProperty: 'historyTimeToLive',

    get: function(element, node) {
      var bo = getBusinessObject(element);
      var historyTimeToLive = bo.get('camunda:historyTimeToLive');

      return {
        historyTimeToLive: historyTimeToLive ? historyTimeToLive : ''
      };
    },

    set: function(element, values) {
      var bo = getBusinessObject(element);

      return cmdHelper.updateBusinessObject(element, bo, {
        'camunda:historyTimeToLive': values.historyTimeToLive || undefined
      });
    }

  });

  return [ historyTimeToLiveEntry ];

};
