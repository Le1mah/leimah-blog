// src/utils/parse-input.ts
export interface Article {
    publishTime: string;
    [key: string]: any;
}

interface InputData {
    content: Article[];
    [key: string]: any;
}

function convertTimestampToRFC3339(timestamp: number): string {
    const dt = new Date(timestamp);
    return dt.toISOString();
}

export default function parseInput(data: InputData): InputData {
    data.content.forEach(article => {
        article.publishTime = convertTimestampToRFC3339(Number(article.publishTime));
    });
    return data;
}