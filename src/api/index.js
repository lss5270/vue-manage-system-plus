import http from '@/common/request';

/* export const fetchData = query => {
    return http({
        url: './table.json',
        method: 'get',
        params: query
    });
}; */

export const getTableData = data => http.post('/v1/getTableData', data)	// 获取表格数据
// get方法使用params传参
// export const getTableData = data => http.get('/v1/getTableData', { params: data })	

