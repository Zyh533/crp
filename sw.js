self.addEventListener("install", function (event) {
  self.skipWaiting(); // 跳过等待
});

self.addEventListener("activate", function (event) {
  clients.claim(); // 立即受控
});

self.addEventListener("fetch", function (event) {
  if (event.request.mode == "navigate") {
    return event.respondWith(
      fetch(event.request).then(res => {
        if (res.status == 404) {
          return fetch("custom404.html");
        }
        return res;
      })
    );
  }
});
self.addEventListener('push', function (event) {
  if (event.data) {
    //模拟数据字符串需加引号
    data = event.data.json();
    console.log(data);
    //用Notification提示信息    
    //self.registration.showNotification(data);
    self.registration.showNotification(data, { body: '川普王，大美兴', icon: 'images/trump.jpg', requireInteraction: true, actions: [{ action: 'yes', title: '投票', }, { action: 'no', title: '拒绝' }] });
  }
});

self.addEventListener('notificationclick', function (event) {
  console.log("notificationclick", event);
  event.notification.close();
  if (event.action == 'yes') console.log("爱国人士！");
  if (event.action == 'no') console.log("被洗脑了！")
});