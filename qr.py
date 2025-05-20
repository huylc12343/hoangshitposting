from flask import Flask, request, jsonify
import pandas as pd
import os

app = Flask(__name__)

@app.route('/scan', methods=['POST'])
def scan():
    data = request.json['data']
    filename = 'data.xlsx'

    if os.path.exists(filename):
        df = pd.read_excel(filename)
    else:
        df = pd.DataFrame(columns=['QR Code'])

    df.loc[len(df)] = [data]
    df.to_excel(filename, index=False)

    return jsonify({'message': 'Dữ liệu đã được lưu vào Excel!'})

if __name__ == '__main__':
    app.run(debug=True)
