import React, { useState } from 'react';

function ErrorTrigger() {
  const [shouldTriggerError, setShouldTriggerError] = useState(false);

  if (shouldTriggerError) {
    throw new Error('Test error!');
  }

  return (
    <button onClick={() => setShouldTriggerError(true)}>
      Trigger Error
    </button>
  );
}

export default ErrorTrigger;