import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = 'http://localhost:8888';

export const useListStore = defineStore('listStore',{
    state: () => ({
        listData: [] as any[],
    }),

    actions: {
        async getList(this: { listData: any[] }) {
            try {
                const {data, status} = await axios.post(`${baseUrl}/category/list`);
                if (status === 200) {
                    this.listData = data;
                }
            } catch (err) {
                console.error(err);
            }
        }
    }
});
