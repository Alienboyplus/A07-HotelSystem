package com.itboyst.facedemo.dto;


public class FaceSearchResDto {
    private String faceId;          //face的ID
    private String name;            //姓名
    private Integer similarValue;   //两张人脸比对的相似值
    private Integer age;            //年龄
    private String gender;          //性别
    private String image;           //照片
    private String alive;           //是否为活体

    public String getFaceId() {
        return faceId;
    }

    public void setFaceId(String faceId) {
        this.faceId = faceId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSimilarValue() {
        return similarValue;
    }

    public void setSimilarValue(Integer similarValue) {
        this.similarValue = similarValue;
    }

    public Integer getAge() { return age; }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getAlive() {return alive; }

    public void setAlive(String alive){ this.alive = alive; }
}
