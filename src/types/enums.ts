export enum MethodsE {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export enum MenuItemsE {
  LOGOUT = 'logOut',
}

export enum DNDE {
  COLUMN = 'COLUMN',
  TODO = 'TODO',
}

const AUTH_PATH = '/auth'

export enum RoutesE {
  HOME = '/',
  SIGN_IN = `${AUTH_PATH}/signIn`,
  SIGN_UP = `${AUTH_PATH}/signUp`,
}

export enum SignUpInputsE {
  NAME = 'userName',
  AGE = 'userAge',
  EMAIL = 'userEmail',
  PASSWORD = 'userPassword',
  CONFIRM_PASSWORD = 'userConfirmPassword',
  PHONE = 'userPhone',
  SITE = 'userSite',
  GENDER = 'userGender',
}

export enum SignInInputsE {
  EMAIL = SignUpInputsE.EMAIL,
  PASSWORD = SignUpInputsE.PASSWORD,
}
