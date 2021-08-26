from flask import Flask,render_template,request,redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']="sqlite:///book.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db=SQLAlchemy(app)

class book(db.Model):
    sno = db.Column(db.Integer , primary_key=True)
    name = db.Column(db.String(50) , nullable=True)
    email = db.Column(db.String(50) , nullable=True)
    phone = db.Column(db.String(50) , nullable=True)
    date = db.Column(db.String(100) , nullable=True)

    def __repr__(self) -> str:
        return f"{self.sno} - {self.name}"


@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/index" , methods=['GET','POST'])
def quiz():

    if request.method=='POST':
        name=request.form.get('name')
        email=request.form.get('email')
        phone=request.form.get('phone')
        date=request.form.get('date')
        entry=book(name=name,email=email,phone=phone,date=date)
        db.session.add(entry)
        db.session.commit()
    return render_template("index.html")

@app.route("/logout")
def logout():
    return render_template("admin.html")

@app.route("/admin" , methods=['GET','POST'])
def admin():
    if request.method=='POST':
        username=request.form.get('username')
        password=request.form.get('password')
        if username=="Rupin" and password=="password":
            dets=book.query.all()
            return render_template("dets.html" , dets=dets)

    return render_template("admin.html")

@app.route("/delete/<string:sno>" , methods=['GET','POST'])
def delete(sno):
    dets=book.query.filter_by(sno=sno).first()
    db.session.delete(dets)
    db.session.commit()
    return redirect("/admin")

if __name__=="__main__":
    app.run(debug=True)