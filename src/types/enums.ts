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

export enum RoutesE {
  HOME = '/',
  SIGN_IN = `/auth/signIn`,
  SIGN_UP = `/auth/signUp`,
  BOARDS = `/boards`,
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

export enum SocketsEventsE {
  COLUMNS = 'columnsUpdated',
  REGISTER_ID = 'registerSocketId',
}
