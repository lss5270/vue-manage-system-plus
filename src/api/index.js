import http from '@/utils/request';

/* export const fetchData = query => {
    return http({
        url: './table.json',
        method: 'get',
        params: query
    });
}; */
export const tableData = data => http.get('/v1/getTableData', data)

