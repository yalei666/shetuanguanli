<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="joinpartyname"
        label="社团名称">
      </el-table-column>
      <el-table-column
        prop="name"
        label="部门名称">
      </el-table-column>
      <el-table-column
        prop="applytime"
        label="申请时间">
      </el-table-column>
      <el-table-column
        prop="status"
        label="当前状态">
      </el-table-column>      
    </el-table>			
</template>
<script type="text/javascript">
	import { mapGetters } from 'vuex'
	import {global} from '../../global/global';
	import {api} from '../../global/api';	
	export default{
		data(){
			return{
	      tableData: []
			}
		},
		methods:{
			getList(){
				var that = this 
				global.get(api.getApplyPartyList,{id:this.uid},function(res){
					var data = res.data 
					if(data.resultCode == 1 ){
						console.log(data.resultData.forEach(function(item,index){
							console.log(item,index)
						}))
						that.tableData = data.resultData

					}
				})				
			}
		},
		mounted(){
			this.getList()
		},
		computed:{
			...mapGetters(
				{uid:'uid'},
			),			
		},		
	}	
</script>
<style type="text/css">
	
</style>