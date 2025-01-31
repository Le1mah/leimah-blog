import { type RequestHandler } from "@builder.io/qwik-city";
import parseInput from "./parseInput";  
import { makeAtom } from "./makeAtom";

export const onGet: RequestHandler = async ({ send }) => {
    const data = await fetchInput();

    if (data.code !== '0') {
        send(500, data.msg);
        return;
    }

    const result = parseInput(data.data);
    const atom = makeAtom(
        result.content,
        'urn:uuid:60a76c80-d399-4a6a-9b4e-5f8f6c6c9f6d',
        '第二外国语日语学院',
        'https://riyu.bisu.edu.cn/'
    );

    const response = new Response(atom, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml'
        }
    });
    send(response);
};

const COLUMN_ID = "6669263160b2c61adea0dd89";
const PAGE_NUM = 0;
const PAGE_SIZE = 10;

async function fetchInput() {
    try {
        const url = 'https://riyu.bisu.edu.cn/mixmedia/api/site/ryxy/story/signatures/list';
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
            'app_secret': 'bbbbbbaaaaaaaaaaaaa',
            'app_key': 'sprint-ucm'
        };

        const formData = new FormData();
        formData.append('columnIds', COLUMN_ID);
        formData.append('pageNumber', PAGE_NUM.toString());
        formData.append('pageSize', PAGE_SIZE.toString());

        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: formData
        });

        if (!response.ok) {
            throw new Error('Failed to fetch input');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        return {
            status: 'failed',
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}