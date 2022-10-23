<template>
    <el-table
      :data="tableData"
      style="width: 100%">
			<el-table-column type="expand">
	      <template slot-scope="scope">
					<el-steps :active="scope.row.step" align-center finish-status="success">
					  <el-step title="初审" ></el-step>
					  <el-step title="一面" ></el-step>
					  <el-step title="二面" ></el-step>
					  <el-step title="完成" ></el-step>
					</el-steps>
	      </template>
			  </el-table-column>      
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
        prop="statustext"
        label="当前状态">
	      	<template slot-scope="scope">
	      		<el-tag :type="scope.row.statusstyle" effect="dark">
	      			{{scope.row.statustext}}
	      		</el-tag>			
	      	</template>        
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
						data.resultData.forEach(function(item,index){
								switch(item.status){
									case 0 :
									item.statustext    = "待初审"
									item.statusstyle   = ''
									break
									case 1 :
									item.statustext = "已加入该社团，恭喜！"
									item.statusstyle = "success"
									break
									case 2:
									item.statustext = "未通过，抱歉！"
									item.statusstyle = "danger"
									break

									case 3:
									item.statustext = "一面中"
									item.statusstyle = ''
									break

									case 4:
									item.statustext = "二面中"
									item.statusstyle = ''
									break									
								}											
						})
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