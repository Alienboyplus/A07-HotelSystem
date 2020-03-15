from tencentcloud.common import credential
from tencentcloud.common.profile.client_profile import ClientProfile
from tencentcloud.common.profile.http_profile import HttpProfile
from tencentcloud.common.exception.tencent_cloud_sdk_exception import TencentCloudSDKException
from tencentcloud.ocr.v20181119 import ocr_client, models

def do_ocr(url):
    try:
        cred = credential.Credential("AKID0QsETXkM5hSpDonYPQH4kKl2CpMh2shK", "1uvnV2Ohu21qT8e7PY2qTvCILDyf2Pbc")
        httpProfile = HttpProfile()
        httpProfile.endpoint = "ocr.tencentcloudapi.com"

        clientProfile = ClientProfile()
        clientProfile.httpProfile = httpProfile
        client = ocr_client.OcrClient(cred, "ap-beijing", clientProfile)

        req = models.IDCardOCRRequest()
        params = '{"ImageUrl":'+"\""+url+"\""+'}'
        print(params)
        req.from_json_string(params)

        resp = client.IDCardOCR(req)
        print(resp.to_json_string())

    except TencentCloudSDKException as err:
        print(err)