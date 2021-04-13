import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const ts = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.ts,
    methodName: props.ts,
    propSetterPropName: props.ts,
    slackDtoParamName: paramMap.ts,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
