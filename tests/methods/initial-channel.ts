import { CompositeBuilderClassConfig } from '../test-config-types';
import { props, paramMap } from '../../src/constants';
import { methodArgMocks } from '../mocks/method-arg-mocks';
import * as checks from '../checks';

export const initialChannel = (params: CompositeBuilderClassConfig): void => {
  const config = {
    ...params,
    methodArgMock: methodArgMocks.initialChannel,
    methodName: props.initialChannel,
    propSetterPropName: props.initialChannel,
    slackDtoParamName: paramMap.initialChannel,
  };

  checks.settableProperty(config);
  checks.literalBuild(config);
};
