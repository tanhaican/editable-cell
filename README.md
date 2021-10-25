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
    <editable-cell
      slot-scope="{ row }"
      :show-input="row.editable"
      v-model="row.id"
      placeholder="ID"
    >
      <span slot="content">{{ row.id }}</span>
    </editable-cell>
  </el-table-column>
  <el-table-column label="Name" prop="name">
    <editable-cell
      slot-scope="{ row }"
      :show-input="row.editable"
      v-model="row.name"
      placeholder="Name"
    >
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
      editable-component="el-checkbox"
      placeholder="Sex"
    >
      <span slot="content">{{ row.sex }}</span>
    </editable-cell>
  </el-table-column>
  <el-table-column label="Age" prop="age">
    <editable-cell
      slot-scope="{ row }"
      :show-input="row.editable"
      v-model="row.age"
      placeholder="Age"
    >
      <span slot="content">{{ row.age }}</span>
    </editable-cell>
  </el-table-column>
  <el-table-column label="Nationality" prop="nationality">
    <editable-cell
      slot-scope="{ row }"
      :show-input="row.editable"
      v-model="row.nationality"
      editable-component="el-select"
      :options="countries"
      placeholder="Nationality"
    >
    </editable-cell>
  </el-table-column>
</el-table>


countries: [
  { value: 1, label: "China" },
  { value: 2, label: "America" },
  { value: 3, label: "Russia" },
  { value: 4, label: "UK" },
  { value: 5, label: "Other" }
],
tableData: [
  {
    nationality: 1,
    editable: false,
    id: 1,
    name: "Danny",
    sex: "M",
    age: 18
  },
  {
    nationality: 2,
    editable: false,
    id: 2,
    name: "Tony",
    sex: "M",
    age: 25
  },
  {
    nationality: 3,
    editable: false,
    id: 3,
    name: "Emily",
    sex: "F",
    age: 21
  },
  {
    nationality: 4,
    editable: false,
    id: 4,
    name: "Green",
    sex: "M",
    age: 26
  }
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