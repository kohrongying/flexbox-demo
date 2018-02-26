Vue.config.devtools = true;

const app = new Vue({
	el: "#app",
	data: {
		active: false,
		justifyContent: {
			value: 'flex-start',
			active: false
		},
		alignItems: {
			value: 'flex-start',
			active: false
		},
		flexDirection: {
			value: 'row',
			active: false
		},
		flexWrap: { 
			value: 'nowrap',
			active: false
		},
		alignContent: {
			value: 'flex-start',
			active: false
		},
		justifyContentOpt: ['flex-start','flex-end','center','space-between', 'space-around'],
		alignItemsOpt: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
		flexDirectionOpt: ['row', 'row-reverse', 'column', 'column-reverse'],
		flexWrapOpt: ['nowrap', 'wrap', 'wrap-reverse']

	}
})
