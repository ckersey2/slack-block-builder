import { HomeTabSurface as Class } from '../../src/surfaces/home-tab';
import { params } from './mocks/home-tab.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'HomeTab';
const category = 'Surfaces';

const config = {
  Class,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.blocks,
  methods.privateMetaData,
  methods.callbackId,
  methods.externalId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });
