export class Utils {

  private static authenticationKey: any;
  private static accessKey: any;

  public static async handlerHead(){
    return {
      ['access-key']: Utils.accessKey ? Utils.accessKey : await localStorage.getItem('accessKey'),
      ['authentication-key']: Utils.authenticationKey ? Utils.authenticationKey : await localStorage.getItem('authenticationKey'),
    }
  }

}
