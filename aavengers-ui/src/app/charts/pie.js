// Constants should be eventually pulled out into configuration data, retrieved from the server
const accountId = '92692004|000133190USD|000100292HKD|000133077CHF|000133468EUR|000100675PHP|000667640GBP';
const indicator = 'Corruption';

class PieController {

  /** @ngInject */
  constructor($http, $log, indicators) {
    $log.info('PIE Controller');
    indicators.getPieChartIndicators(accountId, indicator)
     .then(response => {
       $log.info("Retrieved chart data response: ", response);
       this.chartData = response;
     });
  }
}

export const pie = {
  template: require('./pie.html'),
  controller: PieController
};
