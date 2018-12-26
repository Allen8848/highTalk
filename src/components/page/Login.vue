<template>

    <div class="Allen login">

        <div class="AllenLogo">
        </div>
        <div class="login-wrap">
            <div class="ms-login">
                <div>

                </div>
                <div class="ms-title">
                    <div class="ms-title-l">
                        欢迎注册嗨聊平台
                    </div>

                    <div class="ms-title-r">
                        <span> 已有账号 </span> <a href="#"> 立即登录</a>
                    </div>
                </div>
                <el-form :model="ruleForm" label-width="0px" class="ms-content">
                    <el-form-item>
                        <el-input v-model="ruleForm.companyName" @blur="companyNameBlue()" class="innerInput"
                                  maxlength="25"
                                  placeholder="公司名称 ( 选填 )">
                        </el-input>
                    </el-form-item>
                    <div class="passwordBlur11" style="height:30px;">
                    </div>
                    <div class="passwordBlur22"
                         style="color: #f43a38;padding-top: 5px;padding-bottom: 10px ;display: none">
                        <span>请输入一个有效的公司名称</span>
                    </div>


                    <el-form-item required class="userName">
                        <el-col style="width: 180px;display: inline-block" :span="11">
                            <el-form-item class="user1">
                                <el-input v-model="ruleForm.username" placeholder="用户名" @focus="userNameFocus()"
                                          @blur="userNameBlur()">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line"
                                style="display: inline-block;margin:0 12px;height: 50px;line-height: 50px;text-align: center;"
                                :span="1">@
                        </el-col>
                        <el-col style="width: 160px;display: inline-block;" :span="11">
                            <el-form-item class="user2">
                                <el-input v-model="ruleForm.domain" placeholder="租户域名" @focus="domainFocus()"
                                          @blur="domainBlur()">
                                </el-input>
                            </el-form-item>
                        </el-col>
                        <el-col class="line"
                                style="display: inline-block;height: 50px;line-height: 50px;margin-left: 5px;"
                                :span="2">
                            .hightalk.online
                        </el-col>
                    </el-form-item>

                    <div style="position: relative;height: 30px;">
                        <div style="padding-top: 5px;font-size: 12px;color: #999;padding-bottom: 18px;"
                             class="userDis1">
                            范例 ：admin@company.hightalk.online
                        </div>
                        <div
                            style="padding-top: 5px;font-size: 12px;color: #f43a38;padding-bottom: 18px;position: absolute;left: 0;top: 0;display: none;"
                            class="userDis2">
                            <i class="el-icon-warning"></i> 用户名为1-20个英文，数字，下划线
                        </div>
                        <div
                            style="padding-top: 5px;font-size: 12px;color: #f43a38;padding-bottom: 18px;position: absolute;right: 125px;top: 0;display: none;"
                            class="userDis3">
                            <i class="el-icon-warning"></i> 租户域名1-20英文，数字
                        </div>
                    </div>

                    <div class="pw">
                        <el-form-item>
                            <el-input type="text" placeholder="密码" @focus='passwordFocus()' @blur="password()"
                                      maxlength="20"
                                      v-model="ruleForm.password">
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="passwordBlur1" style="height:30px;">
                    </div>
                    <!-- 获取焦点显示-->
                    <div class="passwordBlur2"
                         style="color: #999;padding-top: 5px;padding-bottom: 10px ;display: none">
                        <span>密码需包含数字、字母和特殊字符 （ 空格除外 )</span>
                    </div>

                    <!--<div class="passwordBlur3"-->
                    <!--style="color:#f43a38;padding-top: 5px;padding-bottom: 10px ;display: none">-->
                    <!--<span><span class="el-icon-warning"></span> <span v-text="passwordTip"></span></span>-->
                    <!--</div>-->


                    <div class="passwordBlur3"
                         style="color:#f43a38;padding-top: 5px;padding-bottom: 10px ;display: none">
                        <span><span class="el-icon-warning"></span> 密码需包含数字、字母和特殊字符 （ 空格除外 )</span>
                    </div>
                    <div class="passwordBlur4"
                         style="color:#f43a38;padding-top: 5px;padding-bottom: 10px ;display: none">
                        <span><span class="el-icon-warning"></span> 密码总长为8-20个字符 </span>
                    </div>

                    <div class="pws">
                        <el-form-item>
                            <el-input type="text" placeholder="确认密码" @focus='passwordFocuss()' @blur="passwords()"
                                      maxlength="20" v-model="ruleForm.passwordTwo">
                            </el-input>
                        </el-form-item>
                    </div>
                    <div class="passwordBlur1s" style="height:30px;">
                    </div>
                    <div class="passwordBlur2s"
                         style="color: #999;padding-top: 5px;padding-bottom: 10px ;display: none">
                        <span>密码需包含数字、字母和特殊字符 （ 空格除外 )</span>
                    </div>
                    <div class="passwordBlur3s"
                         style="color:#f43a38;padding-top: 5px;padding-bottom: 10px ;display: none">
                        <span><span class="el-icon-warning"></span> 密码需包含数字、字母和特殊字符 （ 空格除外 )</span>
                    </div>
                    <div class="passwordBlur4s"
                         style="color:#f43a38;padding-top: 5px;padding-bottom: 10px ;display: none">
                        <span><span class="el-icon-warning"></span> 密码总长为8-20个字符 </span>
                    </div>
                    <div class="passwordBlur5s"
                         style="color:#f43a38;padding-top: 5px;padding-bottom: 10px ;display: none">
                        <span><span class="el-icon-warning"></span> 两次输入的密码不一致，请重新输入 </span>
                    </div>


                    <div>
                        <div class="verify-wrap" id="verify-wrap"></div>
                    </div>
                    <div style="margin-top: 15px;font-size: 14px">
                        <el-checkbox :disabled="register" v-model="ruleForm.reader" style="color: #999">我已阅读并同意
                        </el-checkbox>
                        <span style="color: #999">  <span style="color: #2a8ce7;cursor: pointer" @click="open('/test')">嗨聊平台服务协议</span> 和 <span
                            style="color: #2a8ce7;cursor: pointer" @click="open('/test')">嗨聊平台隐私声明 </span></span>
                    </div>


                    <div class="login-btn" style="margin-top: 40px;">
                        <el-button type="primary" :disabled="register" @click="submitForm('ruleForm')">同意条款并注册
                        </el-button>
                    </div>

                </el-form>
            </div>
        </div>

        <div class="Allen-tip">
            2018 Pactera.All rights reserved
        </div>
    </div>

</template>

<script>
    import host from "../../api/host";

    export default {
        data() {

            var validatePass = (rule, value, callback) => {
                console.log("+++++++", value)

                if (value == "") {
                    callback(new Error('请输入密码'));

                }
                // else if( !reg.test(value) ){
                //     callback(new Error("密码需包含数字、字母和特殊字符 （ 空格除外 ）"));
                // }
                // else if( value.length < 8 ){
                //     callback(new Error("密码长度不得低于8位字符"));
                // }
                // else {
                //     callback();
                // }
            };
            return {
                passwordTip: "",// 密码提醒

                passwordBlur: true, // 密码
                register: true, // 注册

                ruleForm: {
                    domain: "",
                    companyName: "",
                    reader: false, // 协议复选框
                    username: '',
                    password: '',
                    passwordTwo: "",

                },

            }
        },
        mounted() {
            let that = this;
            let SlideVerifyPlug = window.slideVerifyPlug;
            let slideVerify = new SlideVerifyPlug('#verify-wrap', {
                wrapWidth: '500',//设置 容器的宽度 ，默认为 350 ，也可不用设，你自己css 定义好也可以，插件里面会取一次这个 容器的宽度
                initText: '请拖动滑动验证',  //设置  初始的 显示文字
                sucessText: '验证通过',//设置 验证通过 显示的文字
                getSucessState: function (res) {
                    // console.log("验证", res)
                    that.register = false;
                }
            });

        },
        methods: {
            open(v) {
                // const href = window.location.host + '#';
                //
                // console.log(href + v)
                //
                // window.open(href + v);
                let routeData = this.$router.resolve({
                    path: "/serverProtocol",

                });
                window.open(routeData.href, '_blank');

            },
            submitForm(formName) {


                if (!this.companyNameBlue()) {
                    return false
                }


                if (!this.userNameBlur()) {
                    return false
                }

                if (!this.domainBlur()) {

                    return false
                }


                if (!this.password()) {

                    return false
                }
                if (!this.passwords()) {
                    return false
                }


                let that = this;
                console.log(this.ruleForm.reader);
                if (!this.ruleForm.reader) {
                    this.$message({
                        message: '请勾选同意协议',
                        type: 'warning'
                    });
                    return false;
                }

                const FullName = that.ruleForm.username + "@" + that.ruleForm.domain + ".hightalk.online";
                let data = {
                    "TenantInfo": {
                        "ID": "de639518-b8ca-49e5-b5f7-98c729f8e376",
                        "TenantName": that.ruleForm.username, // 用户名
                        "Email": "1062922605@qq.com",
                        "Tel": "",
                        "TenantSite": "",
                        "Trade": "",
                        "Address": "",
                        "LicenseNo": "",
                        "RegistrationNo": "",
                        "Description": "",
                        "Status": 1
                    },
                    "TenantUserProfiles": {
                        "ID": "cbcf0f1f-dbeb-4a1d-9fc4-c4239d9a6ae1",
                        "FullName": FullName,
                        "Photo": "",
                        "TenantDomainName": that.ruleForm.domain, // 租户域名
                        "Account": "10k@sun.hightalk.ai",
                        "Password": that.ruleForm.password, // 密码
                        "Tel": "",
                        "AllowLogin": 1,
                        "AllowOrder": 1,
                        "Status": 1
                    }
                };


                $.ajax({
                    type: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    url: host + "/api/Tenant/Register?v=" + new Date(),
                    data: JSON.stringify(data),
                    dataType: "json",
                    async: true,
                    success: function (msg) {
                        console.log("msg", msg);
                        if (msg.Status == 1) {
                            that.$message({
                                message: msg,
                                type: 'success'
                            });
                        }
                        if (msg.Status == 0) {
                            that.$message({
                                message: msg.ErrorCodes[0].ErrorMessage,
                                type: 'success'
                            });
                        }
                    }
                })


            }
            ,
            verification() {  // 验证
                let flag = false;
                console.log('====', this.reader)
                if (this.reader) {
                    flag = true;
                }
                if (!this.reader) {
                    this.$message({
                        message: '请勾选同意协议',
                        type: 'warning'
                    });
                    flag = false;
                }

                return flag;
            },
            companyNameBlue() {
                let that = this;
                if (that.ruleForm.companyName == "") {
                    return true;
                }
                let testVale = this.checkval(that.ruleForm.companyName);


                if (!testVale) {
                    $(".passwordBlur11").hide();
                    $(".passwordBlur22").show();
                    return false;
                } else {
                    $(".passwordBlur11").show();
                    $(".passwordBlur22").hide();
                    return true;
                }


            },
            checkval(t) {
                var re = /^[\u4e00-\u9fa5a-z]+$/gi;//只能输入汉字和英文字母
                if (re.test(t)) {
                    return true;
                } else {
                    return false;
                }
            },
            userNameFocus() {
                $(".userDis2").hide();
                $(".user1 input").css("border", "1px solid  #2a8ce7");

            },
            domainFocus() {
                $(".userDis3").hide();
                $(".user2 input").css("border", "1px solid  #2a8ce7");
            },
            domainBlur() {
                let username = this.ruleForm.domain
                let result = this.validateStrAndNo(username)
                if (!result) {
                    $(".userDis1").hide();
                    $(".userDis3").show();
                    $(".user2 input").css("border", "1px solid #f43a38");
                    return false;
                }
                return true;

            },
            userNameBlur() {
                let username = this.ruleForm.username
                let regEx = /^[a-zA-Z0-9_]{2,15}$/;
                let result = regEx.test(username)
                if (!result) {
                    $(".userDis1").hide();
                    $(".userDis2").show();
                    $(".user1 input").css("border", "1px solid #f43a38");
                    return false;
                }

                return true;
            },
            passwordFocus() {
                $(".passwordBlur1").hide();
                $(".passwordBlur2").show();
                $(".passwordBlur3").hide();
                $(".passwordBlur4").hide();
                $(".pw input").css("border", "1px solid #2a8ce7");

            },
            passwordFocuss() {
                $(".passwordBlur1s").hide();
                $(".passwordBlur2s").show();
                $(".passwordBlur3s").hide();
                $(".passwordBlur4s").hide();
                $(".passwordBlur5s").hide();
                $(".pws input").css("border", "1px solid #2a8ce7");

            },
            checkpassword(v) {  // 密码需包含数字、字母和特殊字符 （ 空格除外 )
                var numasc = 0;
                var charasc = 0;
                var otherasc = 0;
                if (0 == v.length) {
                    return "密码不能为空";
                } else if (v.length < 8 || v.length > 20) {
                    return "密码至少8个字符,最多20个字符";
                } else {
                    for (var i = 0; i < v.length; i++) {
                        var asciiNumber = v.substr(i, 1).charCodeAt();
                        if (asciiNumber >= 48 && asciiNumber <= 57) {
                            numasc += 1;
                        }
                        if ((asciiNumber >= 65 && asciiNumber <= 90) || (asciiNumber >= 97 && asciiNumber <= 122)) {
                            charasc += 1;
                        }
                        if ((asciiNumber >= 33 && asciiNumber <= 47) || (asciiNumber >= 58 && asciiNumber <= 64) || (asciiNumber >= 91 && asciiNumber <= 96) || (asciiNumber >= 123 && asciiNumber <= 126)) {
                            otherasc += 1;
                        }
                    }
                    if (0 == numasc) {
                        return "密码必须含有数字";
                    } else if (0 == charasc) {
                        return "密码必须含有字母";
                    } else if (0 == otherasc) {
                        return "密码必须含有特殊字符";
                    } else {
                        return true;
                    }
                }
            },
            password() {  // 密码1 失去焦点
                let that = this;
                that.ruleForm.password = $.trim(that.ruleForm.password)
                // console.log(that.ruleForm.password)
                let reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
                if (that.ruleForm.password == "") {
                    $(".passwordBlur1").hide();
                    $(".passwordBlur2").hide();
                    $(".passwordBlur3").show();
                    $(".pw input").css("border", "1px solid #f43a38");
                    $(".pw input").css("border-radius", "4px");
                    return false;
                }
                if (!reg.test(that.ruleForm.password)) {
                    $(".passwordBlur1").hide();
                    $(".passwordBlur2").hide();
                    $(".passwordBlur3").show();
                    $(".passwordBlur4").hide();
                    $(".pw input").css("border", "1px solid #f43a38");
                    $(".pw input").css("border-radius", "4px");
                    return false;
                }
                if (that.ruleForm.password.length < 8) {
                    $(".passwordBlur1").hide();
                    $(".passwordBlur2").hide();
                    $(".passwordBlur3").hide();
                    $(".passwordBlur4").show();
                    $(".pw input").css("border", "1px solid #f43a38");
                    $(".pw input").css("border-radius", "4px");
                    return false;
                } else {
                    $(".passwordBlur1").show();
                    $(".passwordBlur2").hide();
                    $(".passwordBlur3").hide();
                    $(".passwordBlur4").hide();
                    return true;
                }


            },
            passwords() {
                let that = this;
                that.ruleForm.passwordTwo = $.trim(that.ruleForm.passwordTwo);
                let reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
                if (that.ruleForm.passwordTwo == "") {
                    $(".passwordBlur1s").hide();
                    $(".passwordBlur2s").hide();
                    $(".passwordBlur3s").show();
                    $(".passwordBlur4s").hide();
                    $(".passwordBlur5s").hide();
                    $(".pws input").css("border", "1px solid #f43a38");
                    $(".pws input").css("border-radius", "4px");
                    return false;
                }
                if (!reg.test(that.ruleForm.passwordTwo)) {
                    console.log("验证",)
                    $(".passwordBlur1s").hide();
                    $(".passwordBlur2s").hide();
                    $(".passwordBlur3s").show();
                    $(".passwordBlur4s").hide();
                    $(".passwordBlur5s").hide();
                    $(".pws input").css("border", "1px solid #f43a38");
                    $(".pws input").css("border-radius", "4px");
                    return false;
                }
                if (that.ruleForm.passwordTwo.length < 8) {
                    $(".passwordBlur1s").hide();
                    $(".passwordBlur2s").hide();
                    $(".passwordBlur3s").hide();
                    $(".passwordBlur4s").show();
                    $(".passwordBlur5s").hide();
                    $(".pws input").css("border", "1px solid #f43a38");
                    $(".pws input").css("border-radius", "4px");
                    return false;
                }
                if (that.ruleForm.passwordTwo != that.ruleForm.password) {
                    $(".passwordBlur1s").hide();
                    $(".passwordBlur2s").hide();
                    $(".passwordBlur3s").hide();
                    $(".passwordBlur4s").hide();
                    $(".passwordBlur5s").show();
                    $(".pws input").css("border", "1px solid #f43a38");
                    $(".pws input").css("border-radius", "4px");
                    return false;
                } else {
                    $(".passwordBlur1s").show();
                    $(".passwordBlur2s").hide();
                    $(".passwordBlur3s").hide();
                    $(".passwordBlur4s").hide();
                    $(".passwordBlur5s").hide();
                    return true;
                }


            },
            validateStrAndNo(str) {
                var reg = {letter: "^[A-Za-z]+$", num: "^([+-]?)\\d*\\.?\\d+$"};
                if ((new RegExp(reg.letter)).test(str) || (new RegExp(reg.num)).test(str)) {
                    return true;
                } else {
                    return false;
                }
            }


        }
    }
</script>
<style lang="scss">
    .login input {
        height: 50px !important;
        font-size: 16px !important;
        color: #999 !important;

    }

    .login .el-form-item {
        margin: 0;
    }

    .login .login-btn button {
        height: 50px !important;
        line-height: 50px !important;
        padding: 0 !important;
        font-size: 16px !important;
    }
</style>
<style scoped lang="scss">
    body {
        font-family: "微软雅黑";
        padding-top: 0;
        padding-bottom: 20px;
        background: #fff;
        opacity: 1;
        max-width: 100%;
        max-height: 100%;
        font-size: 14px;
    }

    .login * {
        line-height: 1;
    }

    .Allen {
        height: 100%;
    }

    .AllenLogo {
        height: 60px;
        position: absolute;
        left: 60px;
        top: 30px;
        z-index: 9;
        height: 60px;
        /* z-index: 1; */
        background-image: url(../../../static/img/Hightalk-Logo_36090@2x2.png);
        background-size: 180px 45px;
        /* background-position: -125px -35px; */
        background-repeat: no-repeat;
        width: 100%;
    }

    .Allen-tip {
        position: absolute;
        left: 0;
        bottom: 25px;
        z-index: 9;
        font-size: 12px;
        color: #fff;
        text-align: center;
        width: 100%;
        color: #999999;
    }

    .ms-title-l {
        display: inline-block;
    }

    .ms-title-r {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 16px;
        color: #555;
    }

    .ms-title-r a {
        color: #2a8ce7;
        text-decoration: none;
    }

    .userName {
        /*padding-top: 30px;*/
    }

    .login-wrap {
        /*margin-top: 60px;*/
        position: relative;
        /*width: 100%;*/
        height: 100%;
        background: url("../../../static/img/loginBg.png") no-repeat center center fixed;
        background-size: cover;
    }

    .innerInput {

        width: 500px;
    }

    .userName > * {
        display: inline-block;
    }

    .ms-title {
        width: 100%;
        /*line-height: 50px;*/
        /*text-align: center;*/
        /*font-size: 20px;*/
        position: relative;
        text-align: left;
        font-size: 30px;
        color: #333;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 800px;
        height: 700px;
        margin: -350px 0 0 -400px;
        border-radius: 5px;
        /*background: rgba(255, 255, 255, 0.3);*/
        overflow: hidden;
        background: #fff;
        /*border: 1px solid #2a8ce7;*/
        padding: 75px 150px;
    }

    .ms-content {
        /*padding: 30px 30px;*/
        padding-top: 40px;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }

    .login-tips {
        font-size: 12px;
        line-height: 30px;
        color: #fff;
    }
</style>
