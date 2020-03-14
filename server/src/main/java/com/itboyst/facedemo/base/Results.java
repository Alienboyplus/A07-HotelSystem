package com.itboyst.facedemo.base;

import com.itboyst.facedemo.enums.ErrorCodeEnum;


public class Results {

    public static <T> Result<T> newSuccessResult(T data, Integer age, Integer gender, Integer liveness) {
        return newResult(data, "success", true,0, age, gender, liveness);
    }

    public static <T> Result<T> newFailedResult(String message) {
        return newResult(null, message, false,-10000, null, null, null);
    }

    public static <T> Result<T> newFailedResult(Integer code, String message) {
        return newResult(null, message, false, code, null, null, null);
    }

    public static <T> Result<T> newFailedResult(ErrorCodeEnum errorCodeEnum) {
        return newResult(null, errorCodeEnum.getDescription(), false, errorCodeEnum.getCode(), null, null, null);
    }

    public static <T> Result<T> newResult(T data, String message, boolean success, Integer code, Integer age, Integer gender, Integer liveness) {
        Result result = new Result();
        result.setData(data);
        result.setCode(code);
        result.setSuccess(success);
        result.setMessage(message);
        result.setAge(age);
        result.setGender(gender);
        result.setLiveness(liveness);
        return result;
    }
}
