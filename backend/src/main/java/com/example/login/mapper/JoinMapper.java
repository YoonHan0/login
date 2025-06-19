package com.example.login.mapper;

import com.example.login.model.UserInfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface JoinMapper {

    void save(UserInfo param) throws Exception;

    int countDuplicateId(UserInfo userInfo) throws Exception;

    UserInfo findByName(String name);
}
