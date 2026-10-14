import random
import string
import json
import csv
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

def generate_scratch_codes(count=500):
    """
    Sinh danh sách mã cào 8 ký tự dễ đọc, dễ gõ.
    Định dạng: XXXX-YYYY (Ví dụ: ZTR4-BRDY, K9W2-P7M4)
    Loại bỏ các ký tự dễ nhầm: O, 0, 1, I, L
    """
    chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"
    codes = set()
    
    # Mã mẫu đầu tiên cho anh Thiện dễ test
    codes.add("ZTR4-BRDY")
    
    while len(codes) < count:
        p1 = ''.join(random.choices(chars, k=4))
        p2 = ''.join(random.choices(chars, k=4))
        codes.add(f"{p1}-{p2}")
    
    code_list = sorted(list(codes))
    
    # 1. Lưu file JSON cho web xác thực
    json_path = os.path.join(os.path.dirname(__file__), "valid_codes.json")
    data = {code: {"used": False} for code in code_list}
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        
    # 2. Lưu file CSV gửi nhà in thẻ cào
    csv_path = os.path.join(os.path.dirname(__file__), "danh_sach_ma_cao_in_the.csv")
    with open(csv_path, "w", encoding="utf-8-sig", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(["STT", "Mã Cào Dự Thưởng (8 Ký Tự)", "Trạng Thái"])
        for idx, code in enumerate(code_list, start=1):
            writer.writerow([idx, code, "Chưa sử dụng"])
            
    print(f"✅ Đã tạo thành công {count} mã cào 8 ký tự dạng XXXX-YYYY (như ZTR4-BRDY)!")
    print(f"📁 File cấu hình web: {json_path}")
    print(f"📁 File gửi nhà in thẻ: {csv_path}")

if __name__ == "__main__":
    generate_scratch_codes(500)
