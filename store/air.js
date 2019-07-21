export const state = () =>{
    return {
        infoData: {
            seat_infos: {}
				},
				// 机票的总价格
				allPrice: 0
    }
}

// 同步请求
export const mutations = {
	// 设置机票信息
	setInfoData(state,data){
		state.infoData = data
	},
	// 计算总价格
	setAllPrice(state,price){
		state.allPrice = price
	}
}