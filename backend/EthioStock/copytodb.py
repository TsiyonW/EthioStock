import psycopg2
from csv import reader
# open file in read mode
con = psycopg2.connect(
        host = "127.0.0.1",
        database ="ethiostock",
        user = "postgres",
        password = "tsiyon"
    )
postgres_insert_query = "INSERT INTO data_data(stock_type,trade_date, symbol,warehouse, production_year, opening_price, closing_price, high, low, change, percentage_change, volume) VALUES(%s, %s, %s,%s, %s, %s,%s, %s, %s,%s, %s, %s)"
print("Opened database successfully")
cur = con.cursor()

with open(r"C:\Users\Tsiyon\Desktop\coffee.csv") as read_obj:
    csv_reader = reader(read_obj)
    for row in csv_reader:
        record_to_insert = (row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9],row[10],row[11])
        
        cur.execute(postgres_insert_query, record_to_insert)
        print("not here")
        print(row)
con.commit()
con.close()

