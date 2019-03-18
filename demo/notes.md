# 简书的复刻
### Day 1
> 首页导航栏`nav`的搭建。

1. 个人比较熟悉的一种导航框架：
```
     <div>
        <a>
            <img>
        </a>
        <ul>
            <li>
                <img>
                <a></a>
            </li>
            <li>
                <a></a>
            </li>
            <li>
                <form>
                    <input type="text">
                </form>
            </li>
            <li>
                <a href="#"></a>
            </li>
            <li>
                <a href="#"></a>
            </li>
            ...
        </ul>       
```
然后设置ul的display为flex，可以将所有li横向排列，这样在li里设置html标签就能铺展导航栏。

2. 收获到的知识点：
+ `positio`的`absolute`属性,是相对于父元素定位，且该父元素的`position`属性不是`static`(默认值)。

> 故为了使`input`能够居于父元素`form`中间，消除上边距影响；给`input`一个`absolute`的`position`,同时form也使用`position：absolute`。