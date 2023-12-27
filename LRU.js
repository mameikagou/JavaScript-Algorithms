// 运用你所掌握的数据结构，设计和实现一个 LRU (最近最少使用) 缓存机制。
// 它应该支持以下操作： 获取数据 get 和写入数据 put 。

// 获取数据 get(key) - 如果密钥 ( key ) 存在于缓存中，
// 则获取密钥的值（总是正数），否则返回 -1 。
// 写入数据 put(key, value) - 如果密钥不存在，则写入数据。
// 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据，从而为新数据留出空间。

// 进阶:
// 你是否可以在 O(1) 时间复杂度内完成这两种操作？

// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4

class LRUCache {
  // 属性
  cacheCapaity;
  cacheList = new Map();
  // 加一维度, 有这个来推入与推出
  keys = [];
  // 构造函数
  constructor(cacheCapaity) {
    this.cacheCapaity = cacheCapaity;
    // this.cacheList[cacheCapaity];
  }

  // 我对put方法的实现思路就是, 使用数组来实现先进先出, 也即: Least Recently Used;
  // 使用.include()方法来查找值, 看是否需要更新; 
  // 使用.indexOf()发方法来查找下标,再使用splice(,1)来删除;

  // 使用map来储存键值对; set来添加; 
  // 使用shift()来获取最早的元素, 用flag变量标记; 

  // 使用delete(flag)方法来精准删除;
  // 方法
  put = (key, value) => {
    // 如果命中了, 就把它取出来, 然后更新
    if (this.keys.includes(key)) {
      let keyIndex = this.keys.indexOf(key);
      // remove;取出, 删除
      this.keys.splice(keyIndex, 1); // 两个参数是: 位置, 数量
    } else {
      //未命中
      if (this.cacheList.size >= this.cacheCapaity) {
        // 没满足, 直接加;
        // 加入淘汰机制
        let flag = this.keys.shift();
        this.cacheList.delete(flag);
      }
    }
    this.cacheList.set(key,value);
    this.keys.push(key);
  };

  // get 也是要更新数据的; 
  get=(key)=>{
    if(this.keys.includes(key)){
      let keyIndex = this.keys.indexOf(key);
      this.keys.splice(keyIndex,1);
      this.keys.push(key);
    }
    return this.cacheList.get(key)!==undefined?this.cacheList.get(key):-1;
  }
}

let cache = new LRUCache( 2 /* 缓存容量 */ );
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
console.log(cache.get(2));        // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
console.log(cache.get(1));        // 返回 -1 (未找到)
console.log(cache.get(3));       // 返回  3
console.log(cache.get(4));       // 返回  4

let arr = [1,2,3];
let n = arr.pop();
n

let map = new Map();
map.set(4,4);
map.set(7,9);
map.delete(7);

map