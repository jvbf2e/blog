<!--
 * @Author: jvb
 * @LastEditors: jvb
 * @email: tusktalk@163.com
 * @github: https://github.com/jvbf2e
 * @Date: 2021-10-18 11:19:19
 * @LastEditTime: 2021-10-19 11:52:13
 * @FilePath: \Developmente:\Joints\Project\blog\mock\README.md
-->

# Mock & RESTful

## RESTful 规范

| 动作 | HTTP 方式 | 请求的参数 | 参数位置 | URL | 相应内容 |
| :-: | :-: | :-: | :-: | :-: | :-: |
| 查询 | GET | 查询参数 | 可含查询字符串 | /api/companies/{companyId} | 单个资源 or 多个资源的集合 |
| 创建/添加 | POST | 要创建的单个资源信息 | Body | /api/companies | 新创建的单个资源 |
| 局部修改/更新 | PATCH | 待修改资源的 | Body | /api/companies/{companyId} | 无需返回 |
| 替换 | PUT | 要替换的单个资源信息 | Body | /api/companies/{companyId} | 无需返回 |
| 使用预定义的标识进行创建 | PUT | 要创建的单个资源信息 | Body | /api/companies/{companyId} | 返回新创建的资源 |
| 移除/删除 | DELETE | 无 | 可含查询字符串 | /api/companies/{companyId} | 无需返回 |

### 协议

`API与客户端用户的通信协议，总是使用HTTPS协议，以确保交互数据的传输安全。`

### 域名

```
应该尽量将API部署在专用域名之下：                         https://api.example.com
如果确定API很简单,不会有进一步扩展,可以考虑放在主域名下：   https://www.example.com/api
```

### 版本控制

```
https://api.example.com/v{n}

1、应该将API的版本号放入URL。
2、采用多版本并存，增量发布的方式。
3、n代表版本号，分为整型和浮点型
   整型：    大功能版本，  如v1、v2、v3 ...
   浮点型：  补充功能版本， 如v1.1、v1.2、v2.1、v2.2 ...
4、对于一个 API 或服务，应在生产中最多保留 3 个最详细的版本
```

### 路径规则

```
路径又称"终点"（end point），表示API的具体网址。

1、在RESTful架构中，每个网址代表一种资源(resource),所以网址中不能有动词，只能有名词。
  【所用的名词往往与数据库的表格名对应】
2、数据库中的表一般都是同种记录的"集合"(collection),所以API中的名词也应该使用复数。

例子: https://api.example.com/v1/products
      https://api.example.com/v1/users
      https://api.example.com/v1/employees
```

### 请求方式

```
GET（SELECT）：    从服务器取出资源（一项或多项）。
POST（CREATE）：   在服务器新建一个资源。
PUT（UPDATE）：    在服务器更新资源（客户端提供改变后的完整资源）。
DELETE（DELETE）： 从服务器删除资源。

例子：
GET    /v1/products      获取所有商品
GET    /v1/products/ID   获取某个指定商品的信息
POST   /v1/products      新建一个商品
PUT    /v1/products/ID   更新某个指定商品的信息
DELETE /v1/products/ID   删除某个商品,更合理的设计详见【9、非RESTful API的需求】
GET    /v1/products/ID/purchases      列出某个指定商品的所有投资者
GET    /v1/products/ID/purchases/ID   获取某个指定商品的指定投资者信息
```

### 过滤信息

```
若记录数量很多，服务器不可能返回全部记录给用户。
API应该提供分页参数及其它筛选参数，过滤返回结果。

/v1/products?page=1&pageSize=20     指定第几页，以及每页的记录数。
/v1/products?sortBy=name&order=asc  指定返回结果按照哪个属性排序，以及排序顺序。
```

### 传入参数

```
传入参数分为4种类型：

1、cookie：         一般用于OAuth认证
2、request header： 一般用于OAuth认证
3、请求body数据：
4、地址栏参数：
   1）restful 地址栏参数 /v1/products/ID ID为产品编号，获取产品编号为ID的信息
   2）get方式的查询字段 见【六、过滤信息】
```

### 响应参数

```
 response：
----------------------------------------
{
   status: 200,               // 详见【status】

   data: {
      code: 1,                // 详见【code】
      data: {} || [],         // 数据
      message: '成功',        // 存放响应信息提示,显示给客户端用户【须语义化中文提示】
      sysMsg: 'success'       // 存放响应信息提示,调试使用,中英文都行
      ...                     // 其它参数，如 total【总记录数】等
   },

   message: '成功',            // 存放响应信息提示,显示给客户端用户【须语义化中文提示】
   sysMsg: 'success'          // 存放响应信息提示,调试使用,中英文都行
}
----------------------------------------
【status】:
           200: OK       400: Bad Request        500：Internal Server Error
                         401：Unauthorized
                         403：Forbidden
                         404：Not Found

【code】:
         1: 获取数据成功 | 操作成功             0：获取数据失败 | 操作失败
```

### 非 RESTful API 的需求

```
1、实际业务开展过程中，可能会出现各种的api不是简单的restful 规范能实现的。
2、需要有一些api突破restful规范原则。
3、特别是移动互联网的api设计，更需要有一些特定的api来优化数据请求的交互。

1)、删除单个 | 批量删除  ： DELETE  /v1/product      body参数{ids：[]}
2)、页面级API           :  把当前页面中需要用到的所有数据通过一个接口一次性返回全部数据
```

### 一致性原则

```
1、前端需要哪些字段，API接口应该返回哪些字段，字段不多也不少。
2、更新功能尽量做到：初次返回的原始数据参数与提交更新的数据参数结构一致。
3、时间参数，尽量以一致格式的字符串传递， 如：
   ‘2019-01’                |      ‘2019/01’
   ‘2019-01-01’             |      ‘2019/01/01’
   ‘2019-01-01 12:12:12’    |      ‘2019/01/01 12:12:12’
4、其它参数【待更新】
```

### 接口文档

```
1、尽量采用自动化接口文档，可以做到在线测试，同步更新。
2、应包含：接口BASE地址、接口版本、接口模块分类等。
3、每个接口应包含：
   接口地址：不包含接口BASE地址。
   请求方式: get、post、put、delete等。
   请求参数：数据格式【默认JSON、可选form data】、数据类型、是否必填、中文描述。
   响应参数：类型、中文描述。
```

## Mock-Random

```json
{
    'Boolean': '@boolean', // 随机生成布尔类型
    'Natural': '@natural(1, 100)', // 随机生成1到100之间自然数
    'Integer': '@integer(1, 100)', // 生成1到100之间的整数
    'Float': '@float(0, 100, 0, 5)', // 生成0到100之间的浮点数,小数点后尾数为0到5位
    'Character': '@character("aeiou")', // 在aeiou中，生成随机字符，不传参表示生成随机字符
    'String': '@string( 2, 10)', // 生成2到10个字符之间的字符串
    'Range': '@range(0, 10, 2)', // 生成一个数组，数组元素从0开始到10结束，间隔为2
    'Date': '@date("yyyy yy y MM M dd d")', // 生成一个随机日期,可加参数定义日期格式，默认yyyy-mm-dd
    'Color1': '@color', // 生成一个颜色16进制随机值
    'Color2': '@rgb',   //生成一个颜色rgb随机值
    'Paragraph':'@paragraph(2, 5)', //生成2至5个句子的文本
    'Sentence':'@sentence(3, 5)',   //生成3至5个单词组成的一个句子
    'World':'@word(3, 5)',          //生成3-5个字母组成的单词
    'title':'@title(3,5)',          //生成3-5个单词组成的标题
    'cParagraph':'@cparagraph(2, 5)', //生成2至5个句子的中文文本
    'cSentence':'@csentence(3, 5)',   //生成3至5个词语组成的一个中文句子
    'cWorld':'@cword(3, 5)',          //生成3-5个字组成的中文词语
    'ctitle':'@ctitle(3,5)',          //生成3-5个词语组成的中文标题
    'Name': '@name', // 生成姓名
    'cName': '@cname', // 生成中文姓名
    'Url': '@url', // 生成url地址
    'Email':'@email',//生成邮箱
    'Address': '@county(true)'， // 生成省 市 县组成的地址
    'Guid':'@guid()',         //生成Guid值
}
```
