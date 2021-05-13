import {
	date
} from '@/common/utils'

const filters = {
	// 格式化时间戳
	date(timeStamp, format = 'Y-m-d H:i:s') {
		if (!timeStamp) return '';
		return date(format, timeStamp);
	},
	// 格式化价格
	price(price, fixed = 0) {
		if (!price || isNaN(price)){
			return 0
		}
		return fixed > 0 ? parseFloat(price).toFixed(fixed) : +parseFloat(price).toFixed(2);
	},
	// 价格切割
	priceSplit(price, index = 0) {
		if (!price){
			return
		}
		return price.split('.')[index]
	},
}

export default filters;