/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ResponseObject {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 응답 데이터 목록 */
    data?: object;
}

export interface ResponseObjectObject {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 응답 데이터 목록 */
    data?: object;
}

/** 로그인 request */
export interface LoginSearchRequest {
    /** 회사코드 */
    companyCd: string;
    /** 사용자아이디 */
    userId: string;
    /** 패스워드 */
    pw: string;
}

/** 로그인정보 */
export interface LoginInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 사용자일련번호
     * @format int32
     */
    userSeq: number;
    /**
     * 회사코드
     * @minLength 0
     * @maxLength 20
     */
    companyCd?: string;
    /** 회사명 */
    companyNm?: string;
    /**
     * 사용자아이디
     * @minLength 0
     * @maxLength 50
     */
    userId: string;
    /**
     * 사용자명
     * @minLength 0
     * @maxLength 100
     */
    userNm?: string;
    /**
     * 부서코드
     * @minLength 0
     * @maxLength 20
     */
    deptCd?: string;
    /**
     * 부서명
     * @minLength 0
     * @maxLength 200
     */
    deptNm?: string;
    /**
     * 직급코드
     * @minLength 0
     * @maxLength 20
     */
    titleCd?: string;
    /**
     * 직급명
     * @minLength 0
     * @maxLength 200
     */
    titleNm?: string;
    /**
     * 입사일자
     * @minLength 0
     * @maxLength 10
     */
    joinDt?: string;
    /**
     * 재직여부
     * @minLength 0
     * @maxLength 1
     */
    employmentYn?: string;
    /**
     * 전화번호
     * @minLength 0
     * @maxLength 100
     */
    telNo?: string;
    /**
     * 휴대전화번호
     * @minLength 0
     * @maxLength 100
     */
    cellNo?: string;
    /**
     * 이메일주소
     * @minLength 0
     * @maxLength 500
     */
    emailAddr?: string;
    /**
     * 비밀번호
     * @minLength 0
     * @maxLength 100
     */
    pw?: string;
    /**
     * 비밀번호변경일
     * @minLength 0
     * @maxLength 8
     */
    pwChgDt?: string;
    /**
     * 사용자계정잠금여부
     * @minLength 0
     * @maxLength 1
     */
    accountLockYn?: string;
    /**
     * 사용자권한코드
     * @minLength 0
     * @maxLength 100
     */
    userAuthCodes?: string;
    /**
     * 사용여부
     * @minLength 0
     * @maxLength 1
     */
    useYn?: string;
    /** 사용자아이디 */
    userIdForCheck?: string;
    /** 사용자회사로고이미지 */
    logoImgPath?: string;
    /** 로그인사용자 권한목록 */
    userAuthCodeList?: string[];
}

export interface ResponseObjectLoginInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 로그인정보 */
    data?: LoginInfo;
}

/** 첨부파일 정보객제 */
export interface AttachFileInfo {
    /**
     * 파일일련번호
     * @format int32
     */
    fileSeq?: number;
    /**
     * 파일참조테이블키(VOC 아이디)
     * @minLength 0
     * @maxLength 100
     */
    fileRefKey?: string;
    /**
     * 파일참조구분(VOC 상태코드)
     * @minLength 0
     * @maxLength 20
     */
    fileRefDiv?: string;
    /**
     * 파일명
     * @minLength 0
     * @maxLength 300
     */
    fileNm?: string;
    /**
     * 파일경로
     * @minLength 0
     * @maxLength 500
     */
    filePath?: string;
    /**
     * 파일확장자
     * @minLength 0
     * @maxLength 10
     */
    fileExtn?: string;
    /**
     * 파일사이즈
     * @format int32
     */
    fileSize?: number;
    /**
     * 등록자
     * @minLength 0
     * @maxLength 20
     */
    regUserNo?: string;
    /** 등록일시 */
    regDt?: string;
}

/** VOC고객 정보객제 */
export interface VocCustInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 고객일련번호
     * @format int32
     */
    custSeq?: number;
    /** 회사 코드 */
    companyCd?: string;
    /** 회사명 */
    companyNm?: string;
    /**
     * 고객번호
     * @minLength 0
     * @maxLength 20
     */
    custNo?: string;
    /**
     * 고객명
     * @minLength 0
     * @maxLength 100
     */
    custNm?: string;
    /**
     * 고객명_영문
     * @minLength 0
     * @maxLength 100
     */
    custNmEn?: string;
    /**
     * 전화번호
     * @minLength 0
     * @maxLength 100
     */
    telNo?: string;
    /**
     * 이메일
     * @minLength 0
     * @maxLength 500
     */
    emailAddr?: string;
    /**
     * 삭제여부
     * @minLength 0
     * @maxLength 1
     */
    delYn?: string;
    /**
     * VOC건수
     * @format int32
     */
    vocCnt?: number;
    /**
     * 민감VOC건수
     * @format int32
     */
    sensVocCnt?: number;
}

/** VOC 정보객제 */
export interface VocInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * VOC일련번호
     * @format int32
     */
    vocSeq: number;
    /** 회사 코드 */
    companyCd: string;
    /** VOC 아이디 */
    vocId?: string;
    /**
     * 고객일련번호
     * @format int32
     */
    custSeq?: number;
    /**
     * VOC구분코드
     * @minLength 0
     * @maxLength 20
     */
    vocCaseCd?: string;
    /** VOC구분코드명 */
    vocCaseNm?: string;
    /**
     * VOC유형코드_대
     * @minLength 0
     * @maxLength 20
     */
    vocTypeCd1?: string;
    /** VOC유형코드명_대 */
    vocTypeNm1?: string;
    /**
     * VOC유형코드_중
     * @minLength 0
     * @maxLength 20
     */
    vocTypeCd2?: string;
    /** VOC유형코드명_중 */
    vocTypeNm2?: string;
    /**
     * VOC유형코드_소
     * @minLength 0
     * @maxLength 20
     */
    vocTypeCd3?: string;
    /** VOC유형코드명_소 */
    vocTypeNm3?: string;
    /**
     * 접수채널코드
     * @minLength 0
     * @maxLength 20
     */
    rcptChnnCd?: string;
    /** 접수채널코드명 */
    rcptChnnNm?: string;
    /**
     * 발생장소코드
     * @minLength 0
     * @maxLength 20
     */
    sourceCd?: string;
    /** 발생장소코드명 */
    sourceNm?: string;
    /** 발생일시 */
    sourceDt?: string;
    /**
     * 고객회신요청여부
     * @minLength 0
     * @maxLength 1
     */
    custReplyYn?: string;
    /**
     * 고객회신요청방법코드
     * @minLength 0
     * @maxLength 20
     */
    custReplyCd?: string;
    /** 고객회신요청방법코드명 */
    custReplyNm?: string;
    /**
     * VOC제목
     * @minLength 0
     * @maxLength 1000
     */
    vocTitle?: string;
    /** VOC내용 */
    vocCont?: string;
    /**
     * 즉시처리여부
     * @minLength 0
     * @maxLength 1
     */
    immeActYn?: string;
    /**
     * 처리유형코드1
     * @minLength 0
     * @maxLength 20
     */
    vocActTypeCd1?: string;
    /**
     * 처리유형코드2
     * @minLength 0
     * @maxLength 20
     */
    vocActTypeCd2?: string;
    /** 처리유형코드명1 */
    vocActTypeNm1?: string;
    /** 처리유형코드명2 */
    vocActTypeNm2?: string;
    /** 처리일시 */
    vocActDt?: string;
    /**
     * 처리자
     * @minLength 0
     * @maxLength 20
     */
    vocActUserNo?: string;
    /** 처리자명 */
    vocActUserNm?: string;
    /** 처리내용 */
    vocActCont?: string;
    /**
     * VOC상태코드
     * @minLength 0
     * @maxLength 20
     */
    vocStatusCd?: string;
    /** VOC상태코드명 */
    vocStatusNm?: string;
    /**
     * 익명고객여부
     * @minLength 0
     * @maxLength 1
     */
    anonymCustYn?: string;
    /**
     * 민감/특이여부
     * @minLength 0
     * @maxLength 1
     */
    sensSpecYn?: string;
    /**
     * 반려사유
     * @minLength 0
     * @maxLength 4000
     */
    rejectMemo?: string;
    /**
     * 삭제여부
     * @minLength 0
     * @maxLength 1
     */
    delYn?: string;
    /** VOC유형코드명 */
    vocTypeNm?: string;
    /**
     * 고객명
     * @minLength 0
     * @maxLength 100
     */
    custNm?: string;
    /**
     * 고객번호
     * @minLength 0
     * @maxLength 20
     */
    custNo?: string;
    /**
     * 전화번호
     * @minLength 0
     * @maxLength 100
     */
    telNo?: string;
    /**
     * 이메일
     * @minLength 0
     * @maxLength 500
     */
    emailAddr?: string;
    /** 첨부파일목록:voc파일 */
    fileList1?: AttachFileInfo[];
    /** 첨부파일목록:voc처리파일 */
    fileList2?: AttachFileInfo[];
    /** VOC고객 정보객제 */
    vocCustInfo?: VocCustInfo;
}

/** 사용자 정보객제 */
export interface UserInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 사용자일련번호
     * @format int32
     */
    userSeq: number;
    /**
     * 회사코드
     * @minLength 0
     * @maxLength 20
     */
    companyCd?: string;
    /** 회사명 */
    companyNm?: string;
    /**
     * 사용자아이디
     * @minLength 0
     * @maxLength 50
     */
    userId: string;
    /**
     * 사용자명
     * @minLength 0
     * @maxLength 100
     */
    userNm?: string;
    /**
     * 부서코드
     * @minLength 0
     * @maxLength 20
     */
    deptCd?: string;
    /**
     * 부서명
     * @minLength 0
     * @maxLength 200
     */
    deptNm?: string;
    /**
     * 직급코드
     * @minLength 0
     * @maxLength 20
     */
    titleCd?: string;
    /**
     * 직급명
     * @minLength 0
     * @maxLength 200
     */
    titleNm?: string;
    /**
     * 입사일자
     * @minLength 0
     * @maxLength 10
     */
    joinDt?: string;
    /**
     * 재직여부
     * @minLength 0
     * @maxLength 1
     */
    employmentYn?: string;
    /**
     * 전화번호
     * @minLength 0
     * @maxLength 100
     */
    telNo?: string;
    /**
     * 휴대전화번호
     * @minLength 0
     * @maxLength 100
     */
    cellNo?: string;
    /**
     * 이메일주소
     * @minLength 0
     * @maxLength 500
     */
    emailAddr?: string;
    /**
     * 비밀번호
     * @minLength 0
     * @maxLength 100
     */
    pw?: string;
    /**
     * 비밀번호변경일
     * @minLength 0
     * @maxLength 8
     */
    pwChgDt?: string;
    /**
     * 사용자계정잠금여부
     * @minLength 0
     * @maxLength 1
     */
    accountLockYn?: string;
    /**
     * 사용자권한코드
     * @minLength 0
     * @maxLength 100
     */
    userAuthCodes?: string;
    /**
     * 사용여부
     * @minLength 0
     * @maxLength 1
     */
    useYn?: string;
    /** 사용자아이디 */
    userIdForCheck?: string;
    /** 사용자회사로고이미지 */
    logoImgPath?: string;
}

/** 메뉴 정보객제 */
export interface MenuInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 메뉴일련번호
     * @format int32
     */
    menuSeq: number;
    /** 회사명 */
    companyNm?: string;
    /**
     * 메뉴아이디
     * @minLength 0
     * @maxLength 10
     */
    menuId: string;
    /**
     * 메뉴명
     * @minLength 0
     * @maxLength 100
     */
    menuNm: string;
    /**
     * 메뉴레벨
     * @format int32
     */
    menuLevl?: number;
    /**
     * 메뉴URL
     * @minLength 0
     * @maxLength 300
     */
    menuUrl?: string;
    /**
     * 메뉴설명
     * @minLength 0
     * @maxLength 500
     */
    menuDesc?: string;
    /**
     * 상위메뉴 아이디
     * @minLength 0
     * @maxLength 10
     */
    parentMenuId?: string;
    /** 상위메뉴명 */
    parentMenuNm?: string;
    /**
     * 메뉴순서
     * @format int32
     */
    menuOrdr?: number;
    /**
     * 사용여부
     * @minLength 0
     * @maxLength 1
     */
    useYn?: string;
    /**
     * 메뉴여부
     * @minLength 0
     * @maxLength 1
     */
    menuYn?: string;
}

/** 회사지정코드마스터 정보객제 */
export interface CustomCodeMstInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 회사지정코드마스터일련번호
     * @format int32
     */
    customMstSeq?: number;
    /** 회사지정코드 구분:[VOC_TYPE:VOC유형,VOC_ACT_TYPE:VOC처리유형] */
    customType?: string;
    /** 유형그룹코드 */
    customGrpCd?: string;
    /**
     * 유형그룹명
     * @minLength 0
     * @maxLength 100
     */
    customGrpNm: string;
    /**
     * 업종코드
     * @minLength 0
     * @maxLength 20
     */
    industryCd: string;
    /** 업종명 */
    industryNm?: string;
    /**
     * 유형그룹설명
     * @minLength 0
     * @maxLength 1000
     */
    customDesc: string;
    /** 사용여부 */
    useYn?: string;
}

/** 회사지정코드 정보객제 */
export interface CustomCodeInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 회사지정코드일련번호
     * @format int32
     */
    customSeq?: number;
    /**
     * 회사일련번호
     * @format int32
     */
    companySeq?: number;
    /**
     * 회사지정코드마스터일련번호
     * @format int32
     */
    customMstSeq?: number;
    /** 회사지정코드 구분:[VOC_TYPE:VOC유형,VOC_ACT_TYPE:VOC처리유형] */
    customType?: string;
    /**
     * 회사지정코드
     * @minLength 0
     * @maxLength 20
     */
    customCd: string;
    /**
     * 회사지정코드명
     * @minLength 0
     * @maxLength 100
     */
    customNm: string;
    /**
     * 회사지정코드레벨
     * @format int32
     */
    customLevel?: number;
    /** 상위회사지정코드코드 */
    upperCustomCd?: string;
    /**
     * 정렬순서
     * @format int32
     */
    dispOrder?: number;
    /** 사용여부 */
    useYn?: string;
    /** 회사지정코드코드:대 */
    customCd1?: string;
    /** 회사지정코드명:대 */
    customNm1?: string;
    /** 회사지정코드코드:중 */
    customCd2?: string;
    /** 회사지정코드명:중 */
    customNm2?: string;
    /** 회사지정코드코드:소 */
    customCd3?: string;
    /** 회사지정코드명:소 */
    customNm3?: string;
}

/** 회사 정보객제 */
export interface CompanyInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 회사일련번호
     * @format int32
     */
    companySeq?: number;
    /** 회사코드 */
    companyCd?: string;
    /**
     * 회사명
     * @minLength 0
     * @maxLength 300
     */
    companyNm: string;
    /**
     * 회사명_영문
     * @minLength 0
     * @maxLength 300
     */
    companyNmEn?: string;
    /**
     * 사용시작일
     * @minLength 0
     * @maxLength 8
     */
    useStartDt?: string;
    /**
     * 사용종료일
     * @minLength 0
     * @maxLength 8
     */
    useEndDt?: string;
    /**
     * 회사로고경로
     * @minLength 0
     * @maxLength 500
     */
    companyLogoPath?: string;
    /**
     * 회사로고파일명
     * @minLength 0
     * @maxLength 100
     */
    companyLogoFileNm?: string;
    /**
     * 사용여부
     * @minLength 0
     * @maxLength 1
     */
    useYn?: string;
}

/** 코드 정보객제 */
export interface CodeInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 코드일련번호
     * @format int32
     */
    codeSeq?: number;
    /** 코드유형 */
    codeType: string;
    /** 코드 */
    code: string;
    /**
     * 코드명
     * @minLength 0
     * @maxLength 300
     */
    codeNm?: string;
    /**
     * 참조값1
     * @minLength 0
     * @maxLength 100
     */
    refVal1?: string;
    /**
     * 참조값2
     * @minLength 0
     * @maxLength 100
     */
    refVal2?: string;
    /**
     * 참조값3
     * @minLength 0
     * @maxLength 100
     */
    refVal3?: string;
    /**
     * 정렬순서
     * @format int32
     */
    dispOrder?: number;
    /**
     * 사용여부
     * @minLength 0
     * @maxLength 1
     */
    useYn?: string;
}

/** 게시판 정보객제 */
export interface BbsInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 게시판순번
     * @format int32
     */
    bbsSeq?: number;
    /**
     * 게시판유형코드
     * @minLength 0
     * @maxLength 20
     */
    bbsTypeCd: string;
    /**
     * 회사코드
     * @minLength 0
     * @maxLength 10
     */
    companyCd: string;
    /** 회사명 */
    companyNm?: string;
    /**
     * 제목
     * @minLength 0
     * @maxLength 1000
     */
    title?: string;
    /** 내용 */
    contents?: string;
    /** 공지게시여부 */
    notiPostYn?: string;
    /**
     * 조회수
     * @format int32
     */
    hit?: number;
    /** 사용여부 */
    useYn?: string;
    /** 첨부파일목록 */
    fileList?: AttachFileInfo[];
    /**
     * 댓글수
     * @format int32
     */
    commentsCnt?: number;
    files?: File[];
}

/** 게시판댓글 정보객제 */
export interface BbsCommentsInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 게시판순번
     * @format int32
     */
    bbsSeq?: number;
    /**
     * 게시판댓글순번
     * @format int32
     */
    bbsCommentsSeq?: number;
    /** 댓글 */
    comments?: string;
}

/** 권한사용자매핑 정보객제 */
export interface AuthUserInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 권한일련번호
     * @format int32
     */
    authSeq?: number;
    /**
     * 사용자일련번호
     * @format int32
     */
    userSeq?: number;
    /** 회사코드 */
    companyCd?: string;
    /** 사용자아이디 */
    userId?: string;
    /** 사용자명 */
    userNm?: string;
    /** 부서명 */
    deptNm?: string;
    /** 직급명 */
    titleNm?: string;
}

/** 권한메뉴매핑 정보객제 */
export interface AuthMenuInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 메뉴일련번호
     * @format int32
     */
    menuSeq?: number;
    /** 권한코드 */
    authCd?: string;
    /** 회사 코드 */
    companyCd?: string;
    /** 회사명 */
    companyNm?: string;
    /** 메뉴아이디 */
    menuId?: string;
    /** 메뉴명 */
    menuNm?: string;
    /**
     * 메뉴레벨
     * @format int32
     */
    menuLevl?: number;
    /** 메뉴URL */
    menuUrl?: string;
    /** 상위메뉴 아이디 */
    parentMenuId?: string;
    /** 메뉴여부 */
    menuYn?: string;
    /** 메뉴일련번호 */
    menuSeqs?: number[];
}

/** 권한 정보객제 */
export interface AuthInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 권한일련번호
     * @format int32
     */
    authSeq?: number;
    /**
     * 권한코드
     * @minLength 0
     * @maxLength 20
     */
    authCd: string;
    /**
     * 권한명
     * @minLength 0
     * @maxLength 200
     */
    authNm?: string;
    /**
     * 권한설명
     * @minLength 0
     * @maxLength 500
     */
    authDesc?: string;
    /**
     * 사용여부
     * @minLength 0
     * @maxLength 1
     */
    useYn?: string;
    /**
     * 시스템권한여부
     * @minLength 0
     * @maxLength 1
     */
    systemYn?: string;
    /**
     * 권한사용자수
     * @format int32
     */
    authUserCnt?: number;
    /** 회사코드 */
    companyNm?: string;
}

export interface ResponseObjectVocDetailResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** VOC 상세조회 결과 */
    data?: VocDetailResponse;
}

/** VOC 상세조회 결과 */
export interface VocDetailResponse {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * VOC일련번호
     * @format int32
     */
    vocSeq: number;
    /** 회사 코드 */
    companyCd: string;
    /** VOC 아이디 */
    vocId?: string;
    /**
     * 고객일련번호
     * @format int32
     */
    custSeq?: number;
    /**
     * VOC구분코드
     * @minLength 0
     * @maxLength 20
     */
    vocCaseCd?: string;
    /** VOC구분코드명 */
    vocCaseNm?: string;
    /**
     * VOC유형코드_대
     * @minLength 0
     * @maxLength 20
     */
    vocTypeCd1?: string;
    /** VOC유형코드명_대 */
    vocTypeNm1?: string;
    /**
     * VOC유형코드_중
     * @minLength 0
     * @maxLength 20
     */
    vocTypeCd2?: string;
    /** VOC유형코드명_중 */
    vocTypeNm2?: string;
    /**
     * VOC유형코드_소
     * @minLength 0
     * @maxLength 20
     */
    vocTypeCd3?: string;
    /** VOC유형코드명_소 */
    vocTypeNm3?: string;
    /**
     * 접수채널코드
     * @minLength 0
     * @maxLength 20
     */
    rcptChnnCd?: string;
    /** 접수채널코드명 */
    rcptChnnNm?: string;
    /**
     * 발생장소코드
     * @minLength 0
     * @maxLength 20
     */
    sourceCd?: string;
    /** 발생장소코드명 */
    sourceNm?: string;
    /** 발생일시 */
    sourceDt?: string;
    /**
     * 고객회신요청여부
     * @minLength 0
     * @maxLength 1
     */
    custReplyYn?: string;
    /**
     * 고객회신요청방법코드
     * @minLength 0
     * @maxLength 20
     */
    custReplyCd?: string;
    /** 고객회신요청방법코드명 */
    custReplyNm?: string;
    /**
     * VOC제목
     * @minLength 0
     * @maxLength 1000
     */
    vocTitle?: string;
    /** VOC내용 */
    vocCont?: string;
    /**
     * 즉시처리여부
     * @minLength 0
     * @maxLength 1
     */
    immeActYn?: string;
    /**
     * 처리유형코드1
     * @minLength 0
     * @maxLength 20
     */
    vocActTypeCd1?: string;
    /**
     * 처리유형코드2
     * @minLength 0
     * @maxLength 20
     */
    vocActTypeCd2?: string;
    /** 처리유형코드명1 */
    vocActTypeNm1?: string;
    /** 처리유형코드명2 */
    vocActTypeNm2?: string;
    /** 처리일시 */
    vocActDt?: string;
    /**
     * 처리자
     * @minLength 0
     * @maxLength 20
     */
    vocActUserNo?: string;
    /** 처리자명 */
    vocActUserNm?: string;
    /** 처리내용 */
    vocActCont?: string;
    /**
     * VOC상태코드
     * @minLength 0
     * @maxLength 20
     */
    vocStatusCd?: string;
    /** VOC상태코드명 */
    vocStatusNm?: string;
    /**
     * 익명고객여부
     * @minLength 0
     * @maxLength 1
     */
    anonymCustYn?: string;
    /**
     * 민감/특이여부
     * @minLength 0
     * @maxLength 1
     */
    sensSpecYn?: string;
    /**
     * 반려사유
     * @minLength 0
     * @maxLength 4000
     */
    rejectMemo?: string;
    /**
     * 삭제여부
     * @minLength 0
     * @maxLength 1
     */
    delYn?: string;
    /** VOC유형코드명 */
    vocTypeNm?: string;
    /**
     * 고객명
     * @minLength 0
     * @maxLength 100
     */
    custNm?: string;
    /**
     * 고객번호
     * @minLength 0
     * @maxLength 20
     */
    custNo?: string;
    /**
     * 전화번호
     * @minLength 0
     * @maxLength 100
     */
    telNo?: string;
    /**
     * 이메일
     * @minLength 0
     * @maxLength 500
     */
    emailAddr?: string;
    /** 첨부파일목록:voc파일 */
    fileList1?: AttachFileInfo[];
    /** 첨부파일목록:voc처리파일 */
    fileList2?: AttachFileInfo[];
    /** VOC고객 정보객제 */
    vocCustInfo?: VocCustInfo;
    /** VOC이력정보 */
    histList?: VocHistInfo[];
}

/** VOC이력 정보객제 */
export interface VocHistInfo {
    /**
     * 이력일련번호
     * @format int32
     */
    histSeq?: number;
    /**
     * VOC일련번호
     * @format int32
     */
    vocSeq?: number;
    /** 이력구분코드 */
    histTypeCd?: string;
    /** 이력구분명 */
    histTypeNm?: string;
    /** 이력내용 */
    histCont?: string;
    /** 등록자번호 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
}

/** VOC 조회 request */
export interface VocSearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /** 회사 코드 */
    companyCd?: string;
    /** VOC 아이디 */
    vocId?: string;
    /** 고객명 */
    custNm?: string;
    /** VOC구분코드 */
    vocCaseCd?: string;
    /** VOC유형코드_대 */
    vocTypeCd1?: string;
    /** VOC유형코드_중 */
    vocTypeCd2?: string;
    /** VOC유형코드_소 */
    vocTypeCd3?: string;
    /** 접수채널코드 */
    rcptChnnCd?: string;
    /** 발생장소코드 */
    sourceCd?: string;
    /** VOC제목 */
    vocTitle?: string;
    /** 처리유형코드1 */
    vocActTypeCd1?: string;
    /** 처리유형코드2 */
    vocActTypeCd2?: string;
    /** 등록자 */
    regUserNm?: string;
    /** 처리자 */
    vocActUserNm?: string;
    /** VOC상태코드 */
    vocStatusCd?: string;
    /** 삭제여부 */
    delYn?: string;
    /** 등록검색시작일:YYYY-MM-DD */
    regDtStart?: string;
    /** 등록검색종료일:YYYY-MM-DD */
    regDtEnd?: string;
    /** 처리검색시작일:YYYY-MM-DD */
    vocActDtStart?: string;
    /** 처리검색종료일:YYYY-MM-DD */
    vocActDtEnd?: string;
    /** 민감/특이여부 */
    sensSpecYn?: string;
    /**
     * 고객일련번호
     * @format int32
     */
    custSeq?: number;
}

export interface ResponseObjectVocListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** VOC 조회목록 결과 */
    data?: VocListResponse;
}

/** VOC 조회목록 결과 */
export interface VocListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: VocInfo[];
}

export interface ResponseObjectUserInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 사용자 정보객제 */
    data?: UserInfo;
}

/** 사용자 조회 request */
export interface UserSearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /** 회사코드 */
    companyCd?: string;
    /** 사용자아이디 */
    userId?: string;
    /** 사용자명 */
    userNm?: string;
    /** 전화번호 */
    telNo?: string;
    /** 이메일주소 */
    emailAddr?: string;
    /** 재직여부 */
    employmentYn?: string;
}

export interface ResponseObjectUserListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 사용자 조회목록 결과 */
    data?: UserListResponse;
}

/** 사용자 조회목록 결과 */
export interface UserListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: UserInfo[];
}

/** dropdown용 공통코드 */
export interface CommonCode {
    /** 코드명 */
    name?: string;
    /** 코드값 */
    value?: string;
    /** 참조값1 */
    refVal1?: string;
    /** 참조값2 */
    refVal2?: string;
    /** 참조값3 */
    refVal3?: string;
}

export interface ResponseObjectListCommonCode {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 응답 데이터 목록 */
    data?: CommonCode[];
}

/** 현황 조회 request */
export interface Request {
    /** 회사 코드 */
    companyCd?: string;
    /** 기간구분 */
    periodType?: string;
    /** 등록년도 */
    regiYear?: string;
    /** 등록월 */
    regiMonth?: string;
    /** 등록검색시작일:YYYY-MM-DD */
    regDtStart?: string;
    /** 등록검색종료일:YYYY-MM-DD */
    regDtEnd?: string;
    /** 접수채널코드 */
    rcptChnnCd?: string;
    /** VOC유형코드_대 */
    vocTypeCd1?: string;
    /** VOC유형코드_중 */
    vocTypeCd2?: string;
    /** VOC유형코드_소 */
    vocTypeCd3?: string;
    /** VOC유형코드1 조건여부 */
    vocTypeCd1Yn?: string;
    /** VOC유형코드2 조건여부 */
    vocTypeCd2Yn?: string;
    /** VOC유형코드3 조건여부 */
    vocTypeCd3Yn?: string;
    /** 처리유형코드1 */
    vocActTypeCd1?: string;
    /** 처리유형코드2 */
    vocActTypeCd2?: string;
    /** 처리유형코드2 조건여부 */
    vocActTypeCd2Yn?: string;
}

/** 현황 정보객제 */
export interface Info {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /** 기간구분:년도/년월/일자 */
    periodType?: string;
    /** VOC유형코드_대 */
    vocTypeNm1?: string;
    /** VOC유형코드_대코드 */
    vocTypeCd1?: string;
    /** VOC유형코드_중 */
    vocTypeNm2?: string;
    /** VOC유형코드_중코드 */
    vocTypeCd2?: string;
    /** VOC유형코드_소 */
    vocTypeNm3?: string;
    /** VOC유형코드_소코드 */
    vocTypeCd3?: string;
    /** 접수채널명 */
    rcptChnnNm?: string;
    /** 접수채널코드 */
    rcptChnnCd?: string;
    /** 처리유형명1 */
    vocActTypeNm1?: string;
    /** 처리유형코드1 */
    vocActTypeCd1?: string;
    /** 처리유형명2 */
    vocActTypeNm2?: string;
    /** 처리유형코드2 */
    vocActTypeCd2?: string;
    /** 처리기간 */
    actPeriod?: string;
    /**
     * 전체접수건수
     * @format int32
     */
    totalCnt?: number;
    /**
     * 전체전년대비
     * @format int32
     */
    totalYoyCnt?: number;
    /**
     * 칭찬접수건수
     * @format int32
     */
    complimentCnt?: number;
    /**
     * 칭찬접수비율
     * @format float
     */
    complimentRate?: number;
    /**
     * 칭찬전년대비
     * @format int32
     */
    complimentYoyCnt?: number;
    /**
     * 불만접수건수
     * @format int32
     */
    complaintCnt?: number;
    /**
     * 불만비율
     * @format float
     */
    complaintRate?: number;
    /**
     * 불만전년대비
     * @format int32
     */
    complaintYoyCnt?: number;
    /**
     * 제안접수건수
     * @format int32
     */
    suggestionCnt?: number;
    /**
     * 제안비율
     * @format float
     */
    suggestionRate?: number;
    /**
     * 제안전년대비
     * @format int32
     */
    suggestionYoyCnt?: number;
    /**
     * 문의접수건수
     * @format int32
     */
    inquiryCnt?: number;
    /**
     * 문의비율
     * @format float
     */
    inquiryRate?: number;
    /**
     * 문의전년대비
     * @format int32
     */
    inquiryYoyCnt?: number;
}

/** 현황 조회목록 결과 */
export interface ListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: Info[];
}

export interface ResponseObjectListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 현황 조회목록 결과 */
    data?: ListResponse;
}

export interface ResponseObjectMenuInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 메뉴 정보객제 */
    data?: MenuInfo;
}

/** 메뉴 조회 request */
export interface MenuSearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /** 메뉴아이디 */
    menuId?: string;
    /** 메뉴명 */
    menuNm?: string;
    /** 메뉴URL */
    menuUrl?: string;
}

/** 메뉴 조회목록 결과 */
export interface MenuListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: MenuInfo[];
}

export interface ResponseObjectMenuListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 메뉴 조회목록 결과 */
    data?: MenuListResponse;
}

export interface ResponseObjectStatusInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** VOC현황객제 */
    data?: StatusInfo;
}

/** VOC현황객제 */
export interface StatusInfo {
    /**
     * 불만접수건수
     * @format int32
     */
    complaintCnt?: number;
    /**
     * 칭찬접수건수
     * @format int32
     */
    complimentCnt?: number;
    /**
     * 제안접수건수
     * @format int32
     */
    suggestionCnt?: number;
    /**
     * 문의접수건수
     * @format int32
     */
    inquiryCnt?: number;
    /**
     * 평균처리기간
     * @format float
     */
    actPeriodAvg?: number;
}

/** VOC현황및추이객제 */
export interface ProgressInfo {
    /** 기준년월 */
    ymTp?: string;
    /**
     * 전체건수
     * @format int32
     */
    allCnt?: number;
    /**
     * 불만접수건수
     * @format int32
     */
    complaintCnt?: number;
    /**
     * 칭찬접수건수
     * @format int32
     */
    complimentCnt?: number;
    /**
     * 제안접수건수
     * @format int32
     */
    suggestionCnt?: number;
    /**
     * 문의접수건수
     * @format int32
     */
    inquiryCnt?: number;
    /**
     * 민감/특이건수
     * @format float
     */
    sensSpecCnt?: number;
}

export interface ResponseObjectListProgressInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 응답 데이터 목록 */
    data?: ProgressInfo[];
}

export interface ResponseObjectListVocTypeStatusInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 응답 데이터 목록 */
    data?: VocTypeStatusInfo[];
}

/** VOC유형별접수현황 */
export interface VocTypeStatusInfo {
    /** VOC유형코드1 */
    vocTypeCd1?: string;
    /** VOC유형명1 */
    vocTypeNm1?: string;
    /** VOC유형코드2 */
    vocTypeCd2?: string;
    /** VOC유형명2 */
    vocTypeNm2?: string;
    /**
     * VOC유형코드3
     * @format int32
     */
    vocTypeCd3?: number;
    /** VOC유형명3 */
    vocTypeNm3?: string;
    /**
     * 접수건수
     * @format int32
     */
    receiptCnt?: number;
}

export interface ResponseObjectListVocActTypeStatusInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 응답 데이터 목록 */
    data?: VocActTypeStatusInfo[];
}

/** VOC처리유형별접수현황 */
export interface VocActTypeStatusInfo {
    /** VOC유형코드1 */
    vocActTypeCd1?: string;
    /** VOC유형명1 */
    vocActTypeNm1?: string;
    /** VOC유형코드2 */
    vocActTypeCd2?: string;
    /** VOC유형명2 */
    vocActTypeNm2?: string;
    /**
     * 접수건수
     * @format int32
     */
    receiptCnt?: number;
}

/** VOC처리현황객체 */
export interface ActProgressInfo {
    /**
     * 전체건수
     * @format int32
     */
    allCnt?: number;
    /**
     * 평균처리일수
     * @format int32
     */
    actTime?: number;
    /**
     * 처리지연건수
     * @format int32
     */
    nonActCnt?: number;
    /**
     * 완료건수
     * @format int32
     */
    actCnt?: number;
    /**
     * 처리율
     * @format int32
     */
    actRate?: number;
}

export interface ResponseObjectActProgressInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** VOC처리현황객체 */
    data?: ActProgressInfo;
}

/** 게시판 조회 request */
export interface BbsSearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /** 회사코드 */
    companyCd?: string;
    /** 게시판유형코드 */
    bbsTypeCd?: string;
    /** 제목 */
    title?: string;
    /** 등록시작일:YYYY-MM-DD */
    regDtStart?: string;
    /** 등록종료일:YYYY-MM-DD */
    regDtEnd?: string;
}

/** 메인공지사항조회 */
export interface MainNoticeListInfo {
    /** 등록자 */
    regUserNo?: string;
    /** 등록자명 */
    regUserNm?: string;
    /** 등록일시 */
    regDt?: string;
    /** 수정자 */
    modUserNo?: string;
    /** 수정자명 */
    modUserNm?: string;
    /** 수정일시 */
    modDt?: string;
    /**
     * insert 후 반환되는 키
     * @format int32
     */
    returnKey?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 게시판순번
     * @format int32
     */
    bbsSeq?: number;
    /** 게시판타입 */
    bbsTypeCd?: string;
    /** 회사코드 */
    companyCd?: string;
    /** 제목 */
    title?: string;
}

export interface ResponseObjectListMainNoticeListInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 응답 데이터 목록 */
    data?: MainNoticeListInfo[];
}

export interface ResponseObjectVocHistListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** VOC이력 조회목록 결과 */
    data?: VocHistListResponse;
}

/** VOC이력 조회목록 결과 */
export interface VocHistListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: VocHistInfo[];
}

export interface ResponseObjectVocCustInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** VOC고객 정보객제 */
    data?: VocCustInfo;
}

/** VOC고객 조회 request */
export interface VocCustSearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /** 고객일련번호 */
    custSeq?: string;
    /** 회사 코드 */
    companyCd?: string;
    /** 고객번호 */
    custNo?: string;
    /** 고객명 */
    custNm?: string;
    /** 고객명_영문 */
    custNmEn?: string;
    /** 전화번호 */
    telNo?: string;
    /** 이메일 */
    emailAddr?: string;
    /** VOC건수 */
    vocCnt?: string;
    /** 등록시작일 */
    regDtStart?: string;
    /** 등록종료일 */
    regDtEnd?: string;
    /** 익명고객여부 */
    anonymCustYn?: string;
    /** VOC건수정렬여부 */
    vocCntSortYn?: string;
}

export interface ResponseObjectVocCustListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** VOC고객 조회목록 결과 */
    data?: VocCustListResponse;
}

/** VOC고객 조회목록 결과 */
export interface VocCustListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: VocCustInfo[];
}

export interface ResponseObjectCustomCodeInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 회사지정코드 정보객제 */
    data?: CustomCodeInfo;
}

export interface ResponseObjectCustomCodeMstInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 회사지정코드마스터 정보객제 */
    data?: CustomCodeMstInfo;
}

/** 회사지정코드 마스터 조회 request */
export interface CustomCodeMstSearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /** 회사지정코드 구분:[VOC_TYPE:VOC유형,VOC_ACT_TYPE:VOC처리유형] */
    customType?: string;
    /** 업종코드 */
    industryCd?: string;
    /** 회사지정코드그룹명 */
    customNm?: string;
    /** 사용여부 */
    useYn?: string;
    /** 회사지정코드그룹코드 */
    customGrpCd?: string;
}

/** 회사지정코드마스터 조회목록 결과 */
export interface CustomCodeListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: CustomCodeMstInfo[];
}

export interface ResponseObjectCustomCodeListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 회사지정코드마스터 조회목록 결과 */
    data?: CustomCodeListResponse;
}

/** 회사지정코드 조회 request */
export interface CustomCodeSearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 회사지정코드마스터일련번호
     * @format int32
     */
    customMstSeq?: number;
    /**
     * 회사일련번호
     * @format int32
     */
    companySeq?: number;
    /** 회사코드 */
    companyCd?: string;
    /** 회사지정코드 구분:[VOC_TYPE:VOC유형,VOC_ACT_TYPE:VOC처리유형] */
    customType?: string;
    /**
     * 회사지정코드레벨
     * @format int32
     */
    customLevel?: number;
    /** 상위회사지정코드코드 */
    upperCustomCd?: string;
}

export interface ResponseObjectCompanyInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 회사 정보객제 */
    data?: CompanyInfo;
}

/** 회사 조회 request */
export interface CompanySearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /** 회사코드 */
    companyCd?: string;
    /** 회사명_국문 */
    companyNm?: string;
    /** 회사명_영문 */
    companyNmEn?: string;
    /** 사용시작일From */
    useStartDtFr?: string;
    /** 사용시작일To */
    useStartDtTo?: string;
    /** 사용종료일From */
    useEndDtFr?: string;
    /** 사용종료일To */
    useEndDtTo?: string;
    /** 사용여부 */
    useYn?: string;
    /** 회사코드:중복확인용 */
    companyCdForCheck?: string;
}

/** 회사 조회목록 결과 */
export interface CompanyListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: CompanyInfo[];
}

export interface ResponseObjectCompanyListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 회사 조회목록 결과 */
    data?: CompanyListResponse;
}

export interface ResponseObjectCodeInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 코드 정보객제 */
    data?: CodeInfo;
}

/** 코드 조회 request */
export interface CodeSearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /** 코드유형 */
    codeType?: string;
    /** 코드 */
    code?: string;
    /** 코드명 */
    codeNm?: string;
    /** 참조값1 */
    refVal1?: string;
    /** 참조값2 */
    refVal2?: string;
    /** 참조값3 */
    refVal3?: string;
}

/** 코드 조회목록 결과 */
export interface CodeListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: CodeInfo[];
}

export interface ResponseObjectCodeListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 코드 조회목록 결과 */
    data?: CodeListResponse;
}

export interface ResponseObjectBbsInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 게시판 정보객제 */
    data?: BbsInfo;
}

/** 게시판 조회목록 결과 */
export interface BbsListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: BbsInfo[];
}

export interface ResponseObjectBbsListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 게시판 조회목록 결과 */
    data?: BbsListResponse;
}

export interface ResponseObjectBbsCommentsInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 게시판댓글 정보객제 */
    data?: BbsCommentsInfo;
}

/** 게시판댓글 조회 request */
export interface BbsCommentsSearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 게시판순번
     * @format int32
     */
    bbsSeq?: number;
}

/** 게시판댓글 조회목록 결과 */
export interface BbsCommentsListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: BbsCommentsInfo[];
}

export interface ResponseObjectBbsCommentsListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 게시판댓글 조회목록 결과 */
    data?: BbsCommentsListResponse;
}

/** 권한사용자매핑 조회 request */
export interface AuthUserSearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /**
     * 권한일련번호
     * @format int32
     */
    authSeq?: number;
    /** 회사코드 */
    companyCd?: string;
}

/** 권한사용자매핑 조회목록 결과 */
export interface AuthUserListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: AuthUserInfo[];
}

export interface ResponseObjectAuthUserListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 권한사용자매핑 조회목록 결과 */
    data?: AuthUserListResponse;
}

/** 권한메뉴매핑 조회 request */
export interface AuthMenuSearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /** 권한코드 */
    authCd?: string;
    /** 회사코드 */
    companyCd?: string;
}

/** 권한메뉴매핑 조회목록 결과 */
export interface AuthMenuListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: AuthMenuInfo[];
}

export interface ResponseObjectAuthMenuListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 권한메뉴매핑 조회목록 결과 */
    data?: AuthMenuListResponse;
}

export interface ResponseObjectAuthInfo {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 권한 정보객제 */
    data?: AuthInfo;
}

/** 권한 조회 request */
export interface AuthSearchRequest {
    /**
     * 검색시작번호
     * @format int32
     */
    offset?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    length?: number;
    /** 로그인회사코드 */
    loginCompanyCd?: string;
    /** 권한코드 */
    authCd?: string;
    /** 권한명 */
    authNm?: string;
    /** 사용여부 */
    useYn?: string;
    /** 회사코드 */
    companyCd?: string;
    /** 시스템관리자여부 */
    sysAdmin?: boolean;
}

/** 권한 조회목록 결과 */
export interface AuthListResponse {
    /**
     * 현재페이지번호
     * @format int32
     */
    pageNumber?: number;
    /**
     * 페이지당 출력할 데이터수
     * @format int32
     */
    pageSize?: number;
    /**
     * 조회된 데이터수
     * @format int64
     */
    totalCount?: number;
    list?: AuthInfo[];
}

export interface ResponseObjectAuthListResponse {
    /** API 서비스 구분 */
    serviceArea?: string;
    /** API URL 주소 */
    api?: string;
    /** 성공여부 */
    success?: boolean;
    /** 메시지 코드 */
    messageCode?: string;
    /** 메시지 */
    message?: string;
    /** 권한 조회목록 결과 */
    data?: AuthListResponse;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}

export enum ContentType {
    Json = 'application/json',
    FormData = 'multipart/form-data',
    UrlEncoded = 'application/x-www-form-urlencoded',
    Text = 'text/plain'
}

export class HttpClient<SecurityDataType = unknown> {
    public instance: AxiosInstance;
    private securityData: SecurityDataType | null = null;
    private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
    private secure?: boolean;
    private format?: ResponseType;

    constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
        this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || 'http://voclab.co.kr:8090' });
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }

    public setSecurityData = (data: SecurityDataType | null) => {
        this.securityData = data;
    };

    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
        const method = params1.method || (params2 && params2.method);

        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {})
            }
        };
    }

    protected stringifyFormItem(formItem: unknown) {
        if (typeof formItem === 'object' && formItem !== null) {
            return JSON.stringify(formItem);
        } else {
            return `${formItem}`;
        }
    }

    protected createFormData(input: Record<string, unknown>): FormData {
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent: any[] = property instanceof Array ? property : [property];

            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }

            return formData;
        }, new FormData());
    }

    public request = async <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams): Promise<AxiosResponse<T>> => {
        const secureParams = ((typeof secure === 'boolean' ? secure : this.secure) && this.securityWorker && (await this.securityWorker(this.securityData))) || {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const responseFormat = format || this.format || undefined;

        if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
            body = this.createFormData(body as Record<string, unknown>);
        }

        if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
            body = JSON.stringify(body);
        }

        return this.instance.request({
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {})
            },
            params: query,
            responseType: responseFormat,
            data: body,
            url: path
        });
    };
}

/**
 * @title KMAC VOC SYSTEM API 명세서
 * @version v3
 * @baseUrl http://voclab.co.kr:8090
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    login = {
        /**
         * @description login
         *
         * @tags LoginController
         * @name LoginCheck
         * @summary login
         * @request POST:/login
         */
        loginCheck: (data: LoginSearchRequest, params: RequestParams = {}) =>
            this.request<ResponseObjectLoginInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/login`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            })
    };
    kmacvoc = {
        /**
         * @description VOC정보를 삭제한다.
         *
         * @tags VocMstController
         * @name DeleteVocMst
         * @summary VOC 삭제
         * @request POST:/kmacvoc/v1/voc/remove
         */
        deleteVocMst: (data: VocInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/voc/remove`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description VOC정보를 반려처리한다.
         *
         * @tags VocMstController
         * @name ProcReject
         * @summary VOC 반려처리
         * @request POST:/kmacvoc/v1/voc/reject
         */
        procReject: (data: VocInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/voc/reject`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description VOC정보를 수정한다.
         *
         * @tags VocMstController
         * @name UpdateVocMst
         * @summary VOC 수정
         * @request POST:/kmacvoc/v1/voc/modify
         */
        updateVocMst: (data: VocInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/voc/modify`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description VOC내용이미지를 저장한다
         *
         * @tags VocMstController
         * @name Imgupload
         * @summary VOC내용이미지
         * @request POST:/kmacvoc/v1/voc/imgupload
         */
        imgupload: (data: VocInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/voc/imgupload`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description VOC정보를 완료처리한다.
         *
         * @tags VocMstController
         * @name FinishVocMst
         * @summary VOC 완료
         * @request POST:/kmacvoc/v1/voc/finish
         */
        finishVocMst: (data: VocInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/voc/finish`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description VOC정보를 취소처리한다.
         *
         * @tags VocMstController
         * @name CancelVocMst
         * @summary VOC 취소
         * @request POST:/kmacvoc/v1/voc/cancel
         */
        cancelVocMst: (data: VocInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/voc/cancel`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description VOC정보를 완료상신처리한다.
         *
         * @tags VocMstController
         * @name ProcApproval
         * @summary VOC 완료상신
         * @request POST:/kmacvoc/v1/voc/approval
         */
        procApproval: (data: VocInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/voc/approval`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description VOC정보를 등록한다.
         *
         * @tags VocMstController
         * @name InsertVocMst
         * @summary VOC 등록
         * @request POST:/kmacvoc/v1/voc/add
         */
        insertVocMst: (data: VocInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/voc/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 사용자 ID 중복체크 조회한다.
         *
         * @tags UserController
         * @name UserIdForCheck
         * @summary 사용자 ID 중복체크
         * @request POST:/kmacvoc/v1/user/userIdForCheck
         */
        userIdForCheck: (data: UserInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/user/userIdForCheck`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description VOC정보를 삭제한다.
         *
         * @tags UserController
         * @name DeleteUser
         * @summary VOC 삭제
         * @request POST:/kmacvoc/v1/user/remove/{userSeq}
         */
        deleteUser: (userSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/user/remove/${userSeq}`,
                method: 'POST',
                format: 'json',
                ...params
            }),

        /**
         * @description 사용자 정보를 수정한다.
         *
         * @tags UserController
         * @name UpdateUser
         * @summary 사용자 수정
         * @request POST:/kmacvoc/v1/user/modify
         */
        updateUser: (data: UserInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/user/modify`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 사용자 비밀번호 정보를 수정한다.
         *
         * @tags UserController
         * @name UpdateUserPw
         * @summary 사용자 비밀번호 수정
         * @request POST:/kmacvoc/v1/user/modify/pw
         */
        updateUserPw: (data: UserInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/user/modify/pw`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 사용자 정보를 등록한다.
         *
         * @tags UserController
         * @name InsertUser
         * @summary 사용자 등록
         * @request POST:/kmacvoc/v1/user/add
         */
        insertUser: (data: UserInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/user/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description VOC정보를 삭제한다.
         *
         * @tags MenuController
         * @name DeleteMenu
         * @summary VOC 삭제
         * @request POST:/kmacvoc/v1/menu/remove/{menuSeq}
         */
        deleteMenu: (menuSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/menu/remove/${menuSeq}`,
                method: 'POST',
                format: 'json',
                ...params
            }),

        /**
         * @description 메뉴 정보를 수정한다.
         *
         * @tags MenuController
         * @name UpdateMenu
         * @summary 메뉴 수정
         * @request POST:/kmacvoc/v1/menu/modify
         */
        updateMenu: (data: MenuInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/menu/modify`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 메뉴 정보를 등록한다.
         *
         * @tags MenuController
         * @name InsertMenu
         * @summary 메뉴 등록
         * @request POST:/kmacvoc/v1/menu/add
         */
        insertMenu: (data: MenuInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/menu/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 첨부파일 정보를 삭제한다.
         *
         * @tags AttachFilController
         * @name DeleteAttachFile
         * @summary 첨부파일 삭제
         * @request POST:/kmacvoc/v1/file/remove/{fileSeq}
         */
        deleteAttachFile: (fileSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/file/remove/${fileSeq}`,
                method: 'POST',
                format: 'json',
                ...params
            }),

        /**
         * @description VOC정보를 삭제한다.
         *
         * @tags VocCustController
         * @name DeleteVocCust
         * @summary VOC 삭제
         * @request POST:/kmacvoc/v1/customer/remove/{custSeq}
         */
        deleteVocCust: (custSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/customer/remove/${custSeq}`,
                method: 'POST',
                format: 'json',
                ...params
            }),

        /**
         * @description VOC고객 정보를 수정한다.
         *
         * @tags VocCustController
         * @name UpdateVocCust
         * @summary VOC고객 수정
         * @request POST:/kmacvoc/v1/customer/modify
         */
        updateVocCust: (data: VocCustInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/customer/modify`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description VOC고객 정보를 등록한다.
         *
         * @tags VocCustController
         * @name InsertVocCust
         * @summary VOC고객 등록
         * @request POST:/kmacvoc/v1/customer/add
         */
        insertVocCust: (data: VocCustInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/customer/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 회사지정코드정보를 삭제한다.
         *
         * @tags CustomCodeController
         * @name DeleteCustomCode
         * @summary 회사지정코드 삭제
         * @request POST:/kmacvoc/v1/custom/remove/{customSeq}
         */
        deleteCustomCode: (customSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/remove/${customSeq}`,
                method: 'POST',
                format: 'json',
                ...params
            }),

        /**
         * @description 회사지정코드마스터 삭제한다.
         *
         * @tags CustomCodeController
         * @name DeleteCustomCodeMst
         * @summary 회사지정코드마스터 삭제
         * @request POST:/kmacvoc/v1/custom/mst/remove/{customMstSeq}
         */
        deleteCustomCodeMst: (customMstSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/mst/remove/${customMstSeq}`,
                method: 'POST',
                format: 'json',
                ...params
            }),

        /**
         * @description 회사지정코드마스터 정보를 수정한다.
         *
         * @tags CustomCodeController
         * @name UpdateCustomCodeMst
         * @summary 회사지정코드마스터 수정
         * @request POST:/kmacvoc/v1/custom/mst/modify
         */
        updateCustomCodeMst: (data: CustomCodeMstInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/mst/modify`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 회사지정코드마스터 정보를 등록한다.
         *
         * @tags CustomCodeController
         * @name InsertCustomCodeMst
         * @summary 회사지정코드마스터 등록
         * @request POST:/kmacvoc/v1/custom/mst/add
         */
        insertCustomCodeMst: (data: CustomCodeMstInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/mst/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 회사지정코드 정보를 수정한다.
         *
         * @tags CustomCodeController
         * @name UpdateCustomCode
         * @summary 회사지정코드 수정
         * @request POST:/kmacvoc/v1/custom/modify
         */
        updateCustomCode: (data: CustomCodeInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/modify`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * No description
         *
         * @tags CustomCodeController
         * @name ReadExcel
         * @request POST:/kmacvoc/v1/custom/batchReadExcel
         */
        readExcel: (
            query: {
                /** 회사지정코드 정보객제 */
                param: CustomCodeInfo;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/batchReadExcel`,
                method: 'POST',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 회사지정코드 정보를 등록한다.
         *
         * @tags CustomCodeController
         * @name InsertCustomCode
         * @summary 회사지정코드 등록
         * @request POST:/kmacvoc/v1/custom/add
         */
        insertCustomCode: (data: CustomCodeInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 회사정보를 삭제한다.
         *
         * @tags CompanyController
         * @name DeleteCompany
         * @summary 회사 삭제
         * @request POST:/kmacvoc/v1/company/remove/{companySeq}
         */
        deleteCompany: (companySeq: number, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/remove/${companySeq}`,
                method: 'POST',
                format: 'json',
                ...params
            }),

        /**
         * @description 회사 정보를 수정한다. 회사로고 이미지: 'file' 변수에 셋팅
         *
         * @tags CompanyController
         * @name UpdateCompany
         * @summary 회사 수정
         * @request POST:/kmacvoc/v1/company/modify
         */
        updateCompany: (
            query: {
                /** 회사 정보객제 */
                param: CompanyInfo;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/modify`,
                method: 'POST',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 회사별 지정코드정보를 삭제한다.
         *
         * @tags CompanyCustomCodeController
         * @name DeleteCompanyCustomCode
         * @summary 회사별 지정코드 삭제
         * @request POST:/kmacvoc/v1/company/custom/remove/{customSeq}
         */
        deleteCompanyCustomCode: (customSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/custom/remove/${customSeq}`,
                method: 'POST',
                format: 'json',
                ...params
            }),

        /**
         * @description 회사별 지정코드 정보를 수정한다.
         *
         * @tags CompanyCustomCodeController
         * @name UpdateCompanyCustomCode
         * @summary 회사별 지정코드 수정
         * @request POST:/kmacvoc/v1/company/custom/modify
         */
        updateCompanyCustomCode: (data: CustomCodeInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/custom/modify`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 회사별 지정코드 복사
         *
         * @tags CompanyCustomCodeController
         * @name CopyCompanyCustomCode
         * @summary 회사별 지정코드 복사
         * @request POST:/kmacvoc/v1/company/custom/copy
         */
        copyCompanyCustomCode: (data: CustomCodeInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/custom/copy`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 회사별 지정코드 정보를 등록한다.
         *
         * @tags CompanyCustomCodeController
         * @name InsertCompanyCustomCode
         * @summary 회사별 지정코드 등록
         * @request POST:/kmacvoc/v1/company/custom/add
         */
        insertCompanyCustomCode: (data: CustomCodeInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/custom/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 회사 정보를 등록한다. 회사로고 이미지: 'file' 변수에 셋팅
         *
         * @tags CompanyController
         * @name InsertCompany
         * @summary 회사 등록
         * @request POST:/kmacvoc/v1/company/add
         */
        insertCompany: (
            query: {
                /** 회사 정보객제 */
                param: CompanyInfo;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/add`,
                method: 'POST',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 코드정보를 삭제한다.
         *
         * @tags CodeController
         * @name DeleteCode
         * @summary 코드 삭제
         * @request POST:/kmacvoc/v1/code/remove/{codeSeq}
         */
        deleteCode: (codeSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/code/remove/${codeSeq}`,
                method: 'POST',
                format: 'json',
                ...params
            }),

        /**
         * @description 코드 정보를 수정한다.
         *
         * @tags CodeController
         * @name UpdateCode
         * @summary 코드 수정
         * @request POST:/kmacvoc/v1/code/modify
         */
        updateCode: (data: CodeInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/code/modify`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 코드 정보를 등록한다.
         *
         * @tags CodeController
         * @name InsertCode
         * @summary 코드 등록
         * @request POST:/kmacvoc/v1/code/add
         */
        insertCode: (data: CodeInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/code/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 게시판정보를 삭제한다.
         *
         * @tags BbsController
         * @name DeleteBbs
         * @summary 게시판 삭제
         * @request POST:/kmacvoc/v1/bbs/remove/{bbsSeq}
         */
        deleteBbs: (bbsSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/bbs/remove/${bbsSeq}`,
                method: 'POST',
                format: 'json',
                ...params
            }),

        /**
         * @description 게시판 정보를 수정한다.
         *
         * @tags BbsController
         * @name UpdateBbs
         * @summary 게시판 수정
         * @request POST:/kmacvoc/v1/bbs/modify
         */
        updateBbs: (data: BbsInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/bbs/modify`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 공지사항 내용이미지를 저장한다
         *
         * @tags BbsController
         * @name Imgupload1
         * @summary 공지사항 내용이미지
         * @request POST:/kmacvoc/v1/bbs/imgupload
         */
        imgupload1: (data: VocInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/bbs/imgupload`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 게시판댓글정보를 삭제한다.
         *
         * @tags BbsCommentsController
         * @name DeleteBbsComments
         * @summary 게시판댓글 삭제
         * @request POST:/kmacvoc/v1/bbs/comments/remove/{bbsCommentsSeq}
         */
        deleteBbsComments: (bbsCommentsSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/bbs/comments/remove/${bbsCommentsSeq}`,
                method: 'POST',
                format: 'json',
                ...params
            }),

        /**
         * @description 게시판댓글 정보를 수정한다.
         *
         * @tags BbsCommentsController
         * @name UpdateBbsComments
         * @summary 게시판댓글 수정
         * @request POST:/kmacvoc/v1/bbs/comments/modify
         */
        updateBbsComments: (data: BbsCommentsInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/bbs/comments/modify`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 게시판댓글 정보를 등록한다.
         *
         * @tags BbsCommentsController
         * @name InsertBbsComments
         * @summary 게시판댓글 등록
         * @request POST:/kmacvoc/v1/bbs/comments/add
         */
        insertBbsComments: (data: BbsCommentsInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/bbs/comments/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 게시판 정보를 등록한다.
         *
         * @tags BbsController
         * @name InsertBbs
         * @summary 게시판 등록
         * @request POST:/kmacvoc/v1/bbs/add
         */
        insertBbs: (data: BbsInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/bbs/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 권한정보를 삭제한다.
         *
         * @tags AuthUserController
         * @name DeleteAuthUser
         * @summary 권한 삭제
         * @request POST:/kmacvoc/v1/authuser/remove
         */
        deleteAuthUser: (data: AuthUserInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/authuser/remove`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 권한 정보를 등록한다.
         *
         * @tags AuthUserController
         * @name InsertAuthUser
         * @summary 권한 등록
         * @request POST:/kmacvoc/v1/authuser/add
         */
        insertAuthUser: (data: AuthUserInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/authuser/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 권한메뉴정보를 삭제한다.
         *
         * @tags AuthMenuController
         * @name DeleteAuthMenu
         * @summary 권한메뉴 삭제
         * @request POST:/kmacvoc/v1/authmenu/remove
         */
        deleteAuthMenu: (data: AuthMenuInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/authmenu/remove`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 권한메뉴 정보를 등록한다.
         *
         * @tags AuthMenuController
         * @name InsertAuthMenu
         * @summary 권한메뉴 등록
         * @request POST:/kmacvoc/v1/authmenu/add
         */
        insertAuthMenu: (data: AuthMenuInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/authmenu/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 권한정보를 삭제한다.
         *
         * @tags AuthController
         * @name DeleteAuth
         * @summary 권한 삭제
         * @request POST:/kmacvoc/v1/auth/remove/{authSeq}
         */
        deleteAuth: (authSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/auth/remove/${authSeq}`,
                method: 'POST',
                format: 'json',
                ...params
            }),

        /**
         * @description 권한 정보를 수정한다.
         *
         * @tags AuthController
         * @name UpdateAuth
         * @summary 권한 수정
         * @request POST:/kmacvoc/v1/auth/modify
         */
        updateAuth: (data: AuthInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/auth/modify`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description 권한 정보를 등록한다.
         *
         * @tags AuthController
         * @name InsertAuth
         * @summary 권한 등록
         * @request POST:/kmacvoc/v1/auth/add
         */
        insertAuth: (data: AuthInfo, params: RequestParams = {}) =>
            this.request<ResponseObject, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/auth/add`,
                method: 'POST',
                body: data,
                type: ContentType.Json,
                format: 'json',
                ...params
            }),

        /**
         * @description vocSeq로 VOC정보 1건 조회
         *
         * @tags VocMstController
         * @name GetVocMst
         * @summary GET VOC 상세 조회
         * @request GET:/kmacvoc/v1/voc/{vocSeq}
         */
        getVocMst: (vocSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectVocDetailResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/voc/${vocSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description VOC정보 목록 조회
         *
         * @tags VocMstController
         * @name GetVocMstList
         * @summary GET VOC 목록 조회
         * @request GET:/kmacvoc/v1/voc/list
         */
        getVocMstList: (
            query: {
                /** VOC 조회 request */
                param: VocSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectVocListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/voc/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description userSeq로 사용자 정보 1건 조회
         *
         * @tags UserController
         * @name GetUser
         * @summary GET 사용자 상세 조회
         * @request GET:/kmacvoc/v1/user/{userSeq}
         */
        getUser: (userSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectUserInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/user/${userSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description 사용자 목록 조회
         *
         * @tags UserController
         * @name GetUserList
         * @summary GET 사용자 목록 조회
         * @request GET:/kmacvoc/v1/user/list
         */
        getUserList: (
            query: {
                /** 사용자 조회 request */
                param: UserSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectUserListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/user/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description dropdown용 공통코드 목록을 조회한다.
         *
         * @tags UserController
         * @name GetActUserList
         * @summary 처리자 목록조회
         * @request GET:/kmacvoc/v1/user/act/list/{companyCd}
         */
        getActUserList: (companyCd: string, params: RequestParams = {}) =>
            this.request<ResponseObjectListCommonCode, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/user/act/list/${companyCd}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description 유형별 VOC 현황 조회
         *
         * @tags StatisticsController
         * @name GetVocStatusByVoctype
         * @summary GET 유형별 VOC 현황 조회
         * @request GET:/kmacvoc/v1/statistics/list/voctype
         */
        getVocStatusByVoctype: (
            query: {
                /** 현황 조회 request */
                param: Request;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/statistics/list/voctype`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 기간별 VOC 현황 조회
         *
         * @tags StatisticsController
         * @name GetVocStatusByPeriod
         * @summary GET 기간별 VOC 현황 조회
         * @request GET:/kmacvoc/v1/statistics/list/period
         */
        getVocStatusByPeriod: (
            query: {
                /** 현황 조회 request */
                param: Request;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/statistics/list/period`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 접수채널별 VOC 현황 조회
         *
         * @tags StatisticsController
         * @name GetVocStatusByChannel
         * @summary GET 접수채널별 VOC 현황 조회
         * @request GET:/kmacvoc/v1/statistics/list/channel
         */
        getVocStatusByChannel: (
            query: {
                /** 현황 조회 request */
                param: Request;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/statistics/list/channel`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 처리유형별 VOC 현황 조회
         *
         * @tags StatisticsController
         * @name GetVocStatusByActtype
         * @summary GET 처리유형별 VOC 현황 조회
         * @request GET:/kmacvoc/v1/statistics/list/acttype
         */
        getVocStatusByActtype: (
            query: {
                /** 현황 조회 request */
                param: Request;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/statistics/list/acttype`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 처리기간별 VOC 현황 조회
         *
         * @tags StatisticsController
         * @name GetVocStatusByActperiod
         * @summary GET 처리기간별 VOC 현황 조회
         * @request GET:/kmacvoc/v1/statistics/list/actperiod
         */
        getVocStatusByActperiod: (
            query: {
                /** 현황 조회 request */
                param: Request;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/statistics/list/actperiod`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description menuSeq로 메뉴 정보 1건 조회
         *
         * @tags MenuController
         * @name GetMenu
         * @summary GET 메뉴 상세 조회
         * @request GET:/kmacvoc/v1/menu/{menuSeq}
         */
        getMenu: (menuSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectMenuInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/menu/${menuSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description 메뉴 목록 조회
         *
         * @tags MenuController
         * @name GetMenuList
         * @summary GET 메뉴 목록 조회
         * @request GET:/kmacvoc/v1/menu/list
         */
        getMenuList: (
            query: {
                /** 메뉴 조회 request */
                param: MenuSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectMenuListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/menu/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 메인화면 VOC현황 조회
         *
         * @tags MainController
         * @name GetVocStates
         * @summary 메인화면 VOC현황 조회
         * @request GET:/kmacvoc/v1/main/voc-states
         */
        getVocStates: (
            query: {
                /** VOC 조회 request */
                param: VocSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectStatusInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/main/voc-states`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 메인화면 VOC현황 및 추이 조회
         *
         * @tags MainController
         * @name GetVocProgress
         * @summary 메인화면 VOC현황 및 추이 조회
         * @request GET:/kmacvoc/v1/main/voc-progress
         */
        getVocProgress: (
            query: {
                /** VOC 조회 request */
                param: VocSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListProgressInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/main/voc-progress`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 메인화면 VOC유형별 접수현황 조회(소분류)
         *
         * @tags MainController
         * @name GetVocTypeStates3Lev
         * @summary 메인화면 VOC유형별 접수현황 조회(소분류)
         * @request GET:/kmacvoc/v1/main/voc-TypeStates3
         */
        getVocTypeStates3Lev: (
            query: {
                /** VOC 조회 request */
                param: VocSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListVocTypeStatusInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/main/voc-TypeStates3`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 메인화면 VOC유형별 접수현황 조회(중분류)
         *
         * @tags MainController
         * @name GetVocTypeStates2Lev
         * @summary 메인화면 VOC유형별 접수현황 조회(중분류)
         * @request GET:/kmacvoc/v1/main/voc-TypeStates2
         */
        getVocTypeStates2Lev: (
            query: {
                /** VOC 조회 request */
                param: VocSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListVocTypeStatusInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/main/voc-TypeStates2`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 메인화면 VOC유형별 접수현황 조회(대분류)
         *
         * @tags MainController
         * @name GetVocTypeStates1Lev
         * @summary 메인화면 VOC유형별 접수현황 조회(대분류)
         * @request GET:/kmacvoc/v1/main/voc-TypeStates1
         */
        getVocTypeStates1Lev: (
            query: {
                /** VOC 조회 request */
                param: VocSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListVocTypeStatusInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/main/voc-TypeStates1`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 메인화면 VOC처리유형별 접수현황 조회(중분류)
         *
         * @tags MainController
         * @name GetVocActTypeStates2Lev
         * @summary 메인화면 VOC처리유형별 접수현황 조회(중분류)
         * @request GET:/kmacvoc/v1/main/voc-ActTypeStates2
         */
        getVocActTypeStates2Lev: (
            query: {
                /** VOC 조회 request */
                param: VocSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListVocActTypeStatusInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/main/voc-ActTypeStates2`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 메인화면 VOC처리유형별 접수현황 조회(대분류)
         *
         * @tags MainController
         * @name GetVocActTypeStates1Lev
         * @summary 메인화면 VOC처리유형별 접수현황 조회(대분류)
         * @request GET:/kmacvoc/v1/main/voc-ActTypeStates1
         */
        getVocActTypeStates1Lev: (
            query: {
                /** VOC 조회 request */
                param: VocSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListVocActTypeStatusInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/main/voc-ActTypeStates1`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 메인화면 VOC처리현황 조회
         *
         * @tags MainController
         * @name GetVocActProgress
         * @summary 메인화면 VOC처리현황 조회
         * @request GET:/kmacvoc/v1/main/voc-ActProgress
         */
        getVocActProgress: (
            query: {
                /** VOC 조회 request */
                param: VocSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectActProgressInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/main/voc-ActProgress`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 공지사항 목록 조회
         *
         * @tags MainController
         * @name GetMainNoticeList
         * @summary GET 공지사항 목록 조회
         * @request GET:/kmacvoc/v1/main/mian-List
         */
        getMainNoticeList: (
            query: {
                /** 게시판 조회 request */
                param: BbsSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListMainNoticeListInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/main/mian-List`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description VOC이력정보 목록 조회
         *
         * @tags VocCustController
         * @name GetVocCustList
         * @summary GET VOC이력정보 목록 조회
         * @request GET:/kmacvoc/v1/history/list/{vocSeq}
         */
        getVocCustList: (vocSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectVocHistListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/history/list/${vocSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description 파일을 다운로드한다.
         *
         * @tags AttachFilController
         * @name DownloadFile
         * @summary 파일 다운로드
         * @request GET:/kmacvoc/v1/file/download/{fileSeq}
         */
        downloadFile: (fileSeq: number, params: RequestParams = {}) =>
            this.request<File, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/file/download/${fileSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description vocSeq로 VOC고객 정보 1건 조회
         *
         * @tags VocCustController
         * @name GetVocCust
         * @summary GET VOC고객 상세 조회
         * @request GET:/kmacvoc/v1/customer/{custSeq}
         */
        getVocCust: (custSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectVocCustInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/customer/${custSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description VOC고객 목록 조회
         *
         * @tags VocCustController
         * @name GetVocCustList1
         * @summary GET VOC고객 목록 조회
         * @request GET:/kmacvoc/v1/customer/list
         */
        getVocCustList1: (
            query: {
                /** VOC고객 조회 request */
                param: VocCustSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectVocCustListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/customer/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description customSeq로 회사지정코드 정보 1건 조회
         *
         * @tags CustomCodeController
         * @name GetCustomCode
         * @summary GET 회사지정코드 상세 조회
         * @request GET:/kmacvoc/v1/custom/{customSeq}
         */
        getCustomCode: (customSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectCustomCodeInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/${customSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description customMstSeq로 회사지정코드마스터 정보 1건 조회
         *
         * @tags CustomCodeController
         * @name GetCustomCodeMst
         * @summary GET 회사지정코드마스터 상세 조회
         * @request GET:/kmacvoc/v1/custom/mst/{customMstSeq}
         */
        getCustomCodeMst: (customMstSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectCustomCodeMstInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/mst/${customMstSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description 회사지정코드마스터 목록 조회
         *
         * @tags CustomCodeController
         * @name GetCustomCodeMstList
         * @summary GET 회사지정코드마스터 목록 조회
         * @request GET:/kmacvoc/v1/custom/mst/list
         */
        getCustomCodeMstList: (
            query: {
                /** 회사지정코드 마스터 조회 request */
                param: CustomCodeMstSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectCustomCodeListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/mst/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 회사지정코드 목록 조회
         *
         * @tags CustomCodeController
         * @name GetCustomCodeList
         * @summary GET 회사지정코드 목록 조회
         * @request GET:/kmacvoc/v1/custom/list
         */
        getCustomCodeList: (
            query: {
                /** 회사지정코드 조회 request */
                param: CustomCodeSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectCustomCodeListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 양식파일을 다운로드한다.
         *
         * @tags CustomCodeController
         * @name DownloadFile1
         * @summary 양식파일 다운로드
         * @request GET:/kmacvoc/v1/custom/download/{customType}
         */
        downloadFile1: (customType: string, params: RequestParams = {}) =>
            this.request<File, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/download/${customType}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description 회사지정코드 dropbox용 목록 조회
         *
         * @tags CustomCodeController
         * @name GetCustomCodeCodeList
         * @summary GET 회사지정코드 dropbox용 목록 조회
         * @request GET:/kmacvoc/v1/custom/code/list
         */
        getCustomCodeCodeList: (
            query: {
                /** 회사지정코드 조회 request */
                param: CustomCodeSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectCustomCodeListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/custom/code/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description companySeq로 회사 정보 1건 조회
         *
         * @tags CompanyController
         * @name GetCompany
         * @summary GET 회사 상세 조회
         * @request GET:/kmacvoc/v1/company/{companySeq}
         */
        getCompany: (companySeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectCompanyInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/${companySeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description 회사 목록 조회
         *
         * @tags CompanyController
         * @name GetCompanyList
         * @summary GET 회사 목록 조회
         * @request GET:/kmacvoc/v1/company/list
         */
        getCompanyList: (
            query: {
                /** 회사 조회 request */
                param: CompanySearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectCompanyListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 회사로고파일을 다운로드한다.
         *
         * @tags CompanyController
         * @name DownloadFile2
         * @summary 회사로고파일 다운로드
         * @request GET:/kmacvoc/v1/company/download
         */
        downloadFile2: (
            query: {
                companyLogoFileNm: string;
                companyLogoPath: string;
            },
            params: RequestParams = {}
        ) =>
            this.request<File, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/download`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description customSeq로 회사별 지정코드 정보 1건 조회
         *
         * @tags CompanyCustomCodeController
         * @name GetCompanyCustomCode
         * @summary GET 회사별 지정코드 상세 조회
         * @request GET:/kmacvoc/v1/company/custom/{customSeq}
         */
        getCompanyCustomCode: (customSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectCustomCodeInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/custom/${customSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description 회사별 지정코드 목록 조회
         *
         * @tags CompanyCustomCodeController
         * @name GetCompanyCustomCodeList
         * @summary GET 회사별 지정코드 목록 조회
         * @request GET:/kmacvoc/v1/company/custom/list
         */
        getCompanyCustomCodeList: (
            query: {
                /** 회사지정코드 조회 request */
                param: CustomCodeSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectCustomCodeListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/custom/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 회사별 지정코드 dropbox용 목록 조회
         *
         * @tags CompanyCustomCodeController
         * @name GetCompanyCustomSelectList
         * @summary GET 회사별 지정코드 dropbox용 목록 조회
         * @request GET:/kmacvoc/v1/company/custom/code/list
         */
        getCompanyCustomSelectList: (
            query: {
                /** 회사지정코드 조회 request */
                param: CustomCodeSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectCustomCodeListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/company/custom/code/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description codeSeq로 코드 정보 1건 조회
         *
         * @tags CodeController
         * @name GetCode
         * @summary GET 코드 상세 조회
         * @request GET:/kmacvoc/v1/code/{codeSeq}
         */
        getCode: (codeSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectCodeInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/code/${codeSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description 코드 목록 조회
         *
         * @tags CodeController
         * @name GetCodeList
         * @summary GET 코드 목록 조회
         * @request GET:/kmacvoc/v1/code/list
         */
        getCodeList: (
            query: {
                /** 코드 조회 request */
                param: CodeSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectCodeListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/code/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description dropdown용 공통코드 목록을 조회한다.
         *
         * @tags CodeController
         * @name GetCommonCodeList
         * @summary 공통코드 목록조회
         * @request GET:/kmacvoc/v1/code/dropdown/list
         */
        getCommonCodeList: (
            query: {
                /** 코드 조회 request */
                param: CodeSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectListCommonCode, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/code/dropdown/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description bbsSeq로 게시판 정보 1건 조회
         *
         * @tags BbsController
         * @name GetBbs
         * @summary GET 게시판 상세 조회
         * @request GET:/kmacvoc/v1/bbs/{bbsSeq}
         */
        getBbs: (bbsSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectBbsInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/bbs/${bbsSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description 게시판 목록 조회
         *
         * @tags BbsController
         * @name GetBbsList
         * @summary GET 게시판 목록 조회
         * @request GET:/kmacvoc/v1/bbs/list
         */
        getBbsList: (
            query: {
                /** 게시판 조회 request */
                param: BbsSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectBbsListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/bbs/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description bbsCommentsSeq로 게시판댓글 정보 1건 조회
         *
         * @tags BbsCommentsController
         * @name GetBbsComments
         * @summary GET 게시판댓글 상세 조회
         * @request GET:/kmacvoc/v1/bbs/comments/{bbsCommentsSeq}
         */
        getBbsComments: (bbsCommentsSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectBbsCommentsInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/bbs/comments/${bbsCommentsSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description 게시판댓글 목록 조회
         *
         * @tags BbsCommentsController
         * @name GetBbsCommentsList
         * @summary GET 게시판댓글 목록 조회
         * @request GET:/kmacvoc/v1/bbs/comments/list
         */
        getBbsCommentsList: (
            query: {
                /** 게시판댓글 조회 request */
                param: BbsCommentsSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectBbsCommentsListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/bbs/comments/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 권한 목록 조회
         *
         * @tags AuthUserController
         * @name GetAuthUserList
         * @summary GET 권한 목록 조회
         * @request GET:/kmacvoc/v1/authuser/list
         */
        getAuthUserList: (
            query: {
                /** 권한사용자매핑 조회 request */
                param: AuthUserSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectAuthUserListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/authuser/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description 권한메뉴 목록 조회
         *
         * @tags AuthMenuController
         * @name GetAuthMenuList
         * @summary GET 권한메뉴 목록 조회
         * @request GET:/kmacvoc/v1/authmenu/list
         */
        getAuthMenuList: (
            query: {
                /** 권한메뉴매핑 조회 request */
                param: AuthMenuSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectAuthMenuListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/authmenu/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            }),

        /**
         * @description authSeq로 권한 정보 1건 조회
         *
         * @tags AuthController
         * @name GetAuth
         * @summary GET 권한 상세 조회
         * @request GET:/kmacvoc/v1/auth/{authSeq}
         */
        getAuth: (authSeq: number, params: RequestParams = {}) =>
            this.request<ResponseObjectAuthInfo, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/auth/${authSeq}`,
                method: 'GET',
                format: 'json',
                ...params
            }),

        /**
         * @description 권한 목록 조회
         *
         * @tags AuthController
         * @name GetAuthList
         * @summary GET 권한 목록 조회
         * @request GET:/kmacvoc/v1/auth/list
         */
        getAuthList: (
            query: {
                /** 권한 조회 request */
                param: AuthSearchRequest;
            },
            params: RequestParams = {}
        ) =>
            this.request<ResponseObjectAuthListResponse, ResponseObject | (ResponseObject | ResponseObjectObject)>({
                path: `/kmacvoc/v1/auth/list`,
                method: 'GET',
                query: query,
                format: 'json',
                ...params
            })
    };
}
