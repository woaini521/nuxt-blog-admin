declare namespace StoreState {

  // 登录
  export interface Login {
    /** 用户名 */
    username: string

    /** 密码 */
    password: string
  }

  // 用户数据
  export interface User {
    /** 唯一标识 */
    readonly _id: string

    /** 姓名 */
    name: string

    /** 用户名 */
    username: string

    /** 密码 */
    password?: string

    /** 原密码 */
    oldPassword: string

    /** 新密码 */
    newPassword: string

    /** 用户签名 */
    slogan: string

    /** 头像 */
    gravatar: string
  }

  // 网站信息
  export interface Option {
    /** 唯一标识 */
    readonly _id: string

    /** 网站标题 */
    title: string

    /** 副标题 */
    sub_title: string

    /** 关键字 */
    keyword: string

    /** 描述 */
    descript: string

    /** 地址 */
    url: string

    /** email */
    email: string

    /** 备案号 */
    icp: string
  }
}
