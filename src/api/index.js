import http from '@/utils/request';

/* export const fetchData = query => {
    return http({
        url: './table.json',
        method: 'get',
        params: query
    });
}; */
export const getTableData = data => http.post('/v1/getTableData', data)	//获取表格数据
// get方法mock时，问号后参数导致url地址拦截不正确
// export const getTableData = data => http.get('/v1/getTableData', {params: data})	

