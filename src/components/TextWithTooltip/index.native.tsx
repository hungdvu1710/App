import React from 'react';
import Text from '@components/Text';
import type TextWithTooltipProps from './types';

function TextWithTooltip({text, textStyles, numberOfLines = 1}: TextWithTooltipProps) {
    return (
        <Text
            style={textStyles}
            numberOfLines={numberOfLines}
        >
            {text}
        </Text>
    );
}

TextWithTooltip.displayName = 'TextWithTooltip';

export default TextWithTooltip;
