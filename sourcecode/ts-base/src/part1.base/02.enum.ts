export const enumData = () => {

  // 数字枚举 值累计增加，可以设置默认起始值
  enum Role {
    Reporter = 1,
    Developer,
    Mainter, 
    Guest
  }
  // 字符串枚举
  enum Message {
    Success = '成功了',
    Fail = '失败了'
  }
  console.log(Message.Success);
}