# editable-cell

## Install
```
npm install editable-cell --save
```

### Usage
```
import EditableCell from 'editable-cell';
```

#### Demo
```
<el-table :data="tableData">
  <el-table-column label="ID" prop="id">
    <editable-cell slot-scope="{ row }" :show-input="row.editable" v-model="row.id" placeholder="ID">
      <span slot="content">{{ row.id }}</span>
    </editable-cell>
  </el-table-column>
  <el-table-column label="Name" prop="name">
    <editable-cell slot-scope="{ row }" :show-input="row.editable" v-model="row.name" placeholder="Name">
      <span slot="content">{{ row.name }}</span>
    </editable-cell>
  </el-table-column>
  <el-table-column label="Sex" prop="sex">
    <editable-cell
      slot-scope="{ row }"
      :show-input="row.editable"
      v-model="row.sex"
      true-label="M"
      false-label="F"
      editable-component="el-checkbox" placeholder="Sex"
    >
      <span slot="content">{{ row.sex }}</span>
    </editable-cell>
  </el-table-column>
  <el-table-column label="Age" prop="age">
    <editable-cell slot-scope="{ row }" :show-input="row.editable" v-model="row.age" placeholder="Age">
      <span slot="content">{{ row.age }}</span>
    </editable-cell>
  </el-table-column>
</el-table>


tableData: [
  {editable: false, id: 1, name: 'Danny', sex: 'M', age: 18},
  {editable: false, id: 2, name: 'Tony', sex: 'M', age: 25},
  {editable: false, id: 3, name: 'Emily', sex: 'F', age: 21},
  {editable: false, id: 4, name: 'Green', sex: 'M', age: 26}
]
```

### Configs
```
npm run build
```

### Run for demo
```
npm run serve
```
Visit : http://localhost:8080