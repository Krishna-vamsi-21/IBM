import ibm_db
#use connection string
print('started')
conn=ibm_db.connect("SECURITY=SSL;SSlServerCertificate=DigiCertGlobalRootCA.crt;DATABASE=bludb;HOSTNAME=98538591-7217-4024-b027-8baa776ffad1.c3n41cmd0nqnrk39u98g.databases.appdomain.cloud;PORT=30875;PROTOCOL=TCPIP;UID=fty74624;PWD=ovmHmZ3ugA98AG21",'','')
print('connected',conn)
stmt = ibm_db.prepare(conn,'select * from users')
print('execution started')
ibm_db.execute(stmt)
print(ibm_db.fetch_assoc(stmt))
