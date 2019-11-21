
export const storeSamplesData = (data: any) => ({
  type: 'STORE_SAMPLES_DATA',
  data: data
});

export const incrementCurrentStage = (stage: number) => ({
  type: 'INCREMENT_CURRENT_STAGE',
  stage: stage
});