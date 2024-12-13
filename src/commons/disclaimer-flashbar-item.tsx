// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useId } from 'react';
import { FlashbarProps } from '@cloudscape-design/components/flashbar';

export function useDisclaimerFlashbarItem(onDismiss: (id: string) => void): FlashbarProps.MessageDefinition | null {
  const id = useId();

  return {
    type: 'info',
    dismissible: true,
    dismissLabel: 'Dismiss message',
    onDismiss: () => onDismiss(id),
    statusIconAriaLabel: 'info',
    content: (
      <>
        This product is in beta. Bugs may happen.
      </>
    ),
    id,
  };
}
