import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {footer} from './app/footer';

import {chartsModule} from './app/charts/index';

import './index.scss';

angular
  .module('app', [chartsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainFooter', footer);
