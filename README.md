# 中文文档在下面



# randomjson

Generate random json according to condition json

## how to use
 
### install

    npm install randomjson
    
    Or direct reference to the output file: <script src = "dist.js"> </ script>
    

### use

```javascript

    // In the amd, cmd environment, reference packages are not required in the browser
    var randomjson = require('randomjson');
    
    var modelJson = {
        "code": "00",
        "numberCode": "<@[10000,20000]>",
        "msg2": "<@string{2,3}>",
        "logo": "<@image{100,100}>",
        "result": {
            "pList<@{1,3}>":[ 
                {
                    "indexToString": "<@index><@>",
                    "index": "<@index>",
                    "id": "<@[1-5]>", 
                    "price": "<@float>",
                    "name": "name<@index>",
                    "person": "person<@index>",
                    "address": "California NO.<@index>",
                    "mobile": "1<@number{10}>",
                    "tel": "<@number{4}>-<@number{8}>",
                    "list": [
                        {
                            "auditKey": 1,
                            "auditValue": "<@[0,1,2]>"
                        }, 
                        {
                            "auditKey": 2,
                            "auditValue": "<@[0,1,2]>"
                        }
                    ]
                }
            ]
        }
    }
    var myJson = randomjson(modelJson);
    
    The value of myJson might be:
    
    {
        "code": "00",
        "numberCode": 20000,
        "msg2": "hrj",
        "logo": "https://dummyimage.com/100x100",
        "result": {
            "pList": [
                {
                    "indexToString": "1",
                    "index": 1,
                    "id": 2,
                    "price": 37.49,
                    "name": "name1",
                    "person": "person1",
                    "address": "California NO.1",
                    "mobile": "18737211377",
                    "tel": "2526-64023718",
                    "list": [
                        {
                            "auditKey": 1,
                            "auditValue": 1
                        },
                        {
                            "auditKey": 2,
                            "auditValue": 2
                        }
                    ]
                }
            ]
        }
    }
    
```

## If you need to compile to dist
```javascript
    npm install -g webpack
    webpack --entry ./index.js --output-path dist --output-filename dist.js --output-library randomjson --output-library-target umd
```

## example: http://zhoushengfe.com/random/example/randomjson.html can be viewed online

## Lexical

    Starting with <@, ending with>, the middle content is randomjson's lexical  

## Lexical definition

### data type

    "<@number>": the data type is number
    
    "<@string>": the data type is string
    
    "<@null>": the data type is null
    
    "<@boolean>": the data type is boolean
    
    "<@chinese>": chinese string
    
    "<@float {number1, number2}>": Floating point number1 represents the integer number of digits, number2 represents the number of decimal places, defaults to 2
    
    "<@image {width, height}>": Generate the picture width to generate the image width, height to generate the picture height, the default is 400,400
    
    "<@index>": The position of the element in the array, starting at 1
    
### quantifier
    {minNumber, maxNumber}: At least minNumber, up to maxNumber
    
    {minNumber,}: At least minNumber
    
    {number}: A total of number
    
    If it is float, minNumber, maxNumber represents the number of bits of integer and fractional parts
    
    If it is imgae, minNumber, maxNumber represents the picture width height
    
### Multiple options

    You can use "|" to separate multiple options, the random value is one of the values for the string
    
### Numeric range
    
    [1, 2, 3] represents one of 1, 2, and 3, and the value is a number
    
    [1-90] represents an int value from 1 to 90, and the value is a number
    
    [1.00-3.00] represents 2 decimal places between 1 and 3
    
    
### Numeric to string

    Place the placeholder after the number type
  
    The following are the same as the
    
    "IndexToString": "<@index> <@>"

### Length description
    Non-array, the length of the value string, for example: "ret": "<@number {4}>"
    
    When the value is an array, the length is in the key, for example:
```javascript    
             "P11<@{2,5}>": [{
                 "P8": "12312",
                 "P9": ["<@string{4,7}>"],
                 "P10": "<@string>"
             }]
```   
    
# randomjson

根据条件json生成随机json

## 如何使用

### 安装

    npm install randomjson
    
    或者直接引用产出文件：<script src="dist.js"></script>
    
### 用法

```javascript

    // 在amd,cmd环境中，引用包，在浏览器中无需引用
    
    var randomjson = require('randomjson');
    
    // 模型
    var modelJson = {
        "code": "00",
        "numberCode": "<@[10000,20000]>",
        "msg": "<@chinese{12,50}>",
        "msg2": "<@string{2,3}>",
        "logo": "<@image{100,100}>",
        "result": {
            "pList<@{1,3}>":[ 
                {
                    "indexToString": "<@index><@>",
                    "index": "<@index>",
                    "id": "<@[1-5]>", 
                    "price": "<@float>",
                    "name": "公司名称<@index>",
                    "person": "李文武<@index>",
                    "address": "北京市海淀区西三旗",
                    "mobile": "1<@number{10}>",
                    "tel": "<@number{4}>-<@number{8}>",
                    "list": [
                        {
                            "auditKey": 1,
                            "auditValue": "<@[0,1,2]>"
                        }, 
                        {
                            "auditKey": 2,
                            "auditValue": "<@[0,1,2]>"
                        }
                    ]
                }
            ]
        }
    }
    // 根据模型生成json
    var myJson = randomjson(modelJson);
    
    根据上边模型生成的json可能是这样:
    
    {
        "code": "00",
        "numberCode": 10000,
        "msg": "加义为边平压你治提用根治问求只或程干立农资特",
        "msg2": "dv",
        "logo": "https://dummyimage.com/100x100",
        "result": {
            "pList": [
                {
                    "indexToString": "1",
                    "index": 1,
                    "id": 2,
                    "price": 93.78,
                    "name": "公司名称1",
                    "person": "李文武1",
                    "address": "北京市海淀区西三旗",
                    "mobile": "17929438781",
                    "tel": "1148-56055642",
                    "list": [
                        {
                            "auditKey": 1,
                            "auditValue": 0
                        },
                        {
                            "auditKey": 2,
                            "auditValue": 1
                        }
                    ]
                },
                {
                    "indexToString": "2",
                    "index": 2,
                    "id": 5,
                    "price": 29.49,
                    "name": "公司名称2",
                    "person": "李文武2",
                    "address": "北京市海淀区西三旗",
                    "mobile": "17826945504",
                    "tel": "7298-46226026",
                    "list": [
                        {
                            "auditKey": 1,
                            "auditValue": 0
                        },
                        {
                            "auditKey": 2,
                            "auditValue": 0
                        }
                    ]
                }
            ]
        }
    }
    
```

## 如果你需要编译到dist
```javascript
    npm install -g webpack
    webpack --entry ./index.js --output-path dist --output-filename dist.js --output-library randomjson --output-library-target umd
```
 
## 例子 ：http://zhoushengfe.com/random/example/randomjson.html  可以在线编辑查看


## 词法

    以<@开始，以>结束，中间内容是randomjson的词法

## 模型定义

### 数据类型

    "<@number>": number类型
    
    "<@string>": string类型
    
    "<@null>": null
    
    "<@boolean>": boolean类型
    
    "<@chinese>": 中文字符串
    
    "<@float{number1,number2}>": 浮点数 number1代表整数位数，number2代表小数位数，默认都为2
    
    
    "<@image{width,height}>": 生成图片 width为生成图片宽度，height为生成图片高度，默认为400,400
    
    "<@index>": 元素在数组中的位置，从1开始
    
### 量词

    {minNumber, maxNumber}: minNumber到maxNumber个
    
    {minNumber,}: 最少minNumber
    
    {number}: number个
    
    如果是float,minNumber, maxNumber表示整数部分和小数部分的位数
    
    如果是imgae,minNumber, maxNumber表示图片宽度高度
    
### 随机生成其中之一

    你可以使用“|” 分离多个选项，随机值是其中之一，值为字符串
    
### 数字范围
    
    [1,2,3] 表示1,2,3中的一个，值为数字
    
    [1-90] 表示1到90中的一个int值，值为数字
    
    [1.00-3.00] 表示1到3之间的2位小数
    



    
### 数字转字符串

    在number类型后加空的占位符
   
    "indexToString": "<@index><@>"
    
### 量词定义注意点

    值为非数组时，长度在value字符串里，例如："ret": "<@number{4}>"
    
    值为数组时，长度在key里，例如：
```javascript      
            "p11<@{2,5}>": [{
                "p8": "12312",
                "p9": ["<@string{4,7}>"],
                "p10": "<@string>"
            }]
``` 
