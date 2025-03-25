export interface ReviewDataType {
  writer: string;
  score: number;
  text: string;
}

export interface InsightsDataType {
  btText: string;
  image: string;
  title: string;
  titleFontSize?: number;
  description: string;
  descriptionFontSize?: number;
}

export interface IconDataType {
  image: string;
  title: string;
  text: string;
}
