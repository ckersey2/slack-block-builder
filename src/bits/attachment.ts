import { BitBase } from '../base';
import { SlackDto } from '../lib';
import {
  HasBlocks,
  HasColor,
  HasEnd,
  HasFallback,
  MustBuild,
} from '../methods';
import { applyMixins, getBuilderResults } from '../helpers';

export interface AttachmentParams {
  color?: string;
  fallback?: string;
}

export interface AttachmentBit extends HasBlocks,
  HasColor,
  HasEnd,
  HasFallback,
  MustBuild {
}

/**
 * {@link https://api.slack.com/reference/messaging/attachments}
 */

export class AttachmentBit extends BitBase implements AttachmentBit {
  constructor(params?: AttachmentParams) {
    super(params);
  }

  public build(): SlackDto {
    const augmentedProps = {
      blocks: getBuilderResults(this.props.blocks),
    };

    return this.getResult(SlackDto, augmentedProps);
  }
}

applyMixins(AttachmentBit, [
  HasBlocks,
  HasColor,
  HasEnd,
  HasFallback,
]);
