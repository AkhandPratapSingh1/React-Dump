# ... (previous code) ...

class Application:

    # ... (previous code) ...

    def update1(self):
        self.input = self.idnet.get()
        # execute sql
        sql = "SELECT * FROM appointments WHERE id LIKE ?"
        self.res = c.execute(sql, (self.input,))
        for self.row in self.res:
            self.name1 = self.row[1]
            self.age = self.row[2]
            self.gender = self.row[3]
            self.location = self.row[4]
            self.phone = self.row[5]
            self.doctor = self.row[6]  # Fetch 'doctor' from the database

        # creating the update form
        self.uname = Label(self.updateframe, text="Patient's Name", font=('arial 14 bold'))
        self.uname.place(x=0, y=140)

        self.uage = Label(self.updateframe, text="Age", font=('arial 14 bold'))
        self.uage.place(x=0, y=180)

        self.ugender = Label(self.updateframe, text="Gender", font=('arial 14 bold'))
        self.ugender.place(x=0, y=220)

        self.ulocation = Label(self.updateframe, text="Location", font=('arial 14 bold'))
        self.ulocation.place(x=0, y=260)

        self.uphone = Label(self.updateframe, text="Phone Number", font=('arial 14 bold'))
        self.uphone.place(x=0, y=300)

        # Doctor label and dropdown
        self.udoc = Label(self.updateframe, text="Doctor", font=('arial 14 bold'))
        self.udoc.place(x=0, y=340)

        self.doctor_names = self.fetch_doctor_names()  # Fetch doctor names from database
        self.doctor_combobox = Combobox(self.updateframe, values=self.doctor_names, width=27)
        self.doctor_combobox.place(x=180, y=340)
        self.doctor_combobox.set(self.doctor)  # Set the default value to the current doctor

        # entrys
        self.ent1 = Entry(self.updateframe, width=30)
        self.ent1.place(x=180, y=140)
        self.ent1.insert(END, str(self.name1))

        self.ent2 = Entry(self.updateframe, width=30)
        self.ent2.place(x=180, y=180)
        self.ent2.insert(END, str(self.age))

        self.ent3 = Entry(self.updateframe, width=30)
        self.ent3.place(x=180, y=220)
        self.ent3.insert(END, str(self.gender))

        self.ent4 = Entry(self.updateframe, width=30)
        self.ent4.place(x=180, y=260)
        self.ent4.insert(END, str(self.location))

        self.ent5 = Entry(self.updateframe, width=30)
        self.ent5.place(x=180, y=300)
        self.ent5.insert(END, str(self.phone))

        # buttons for update and delete
        self.update = Button(self.updateframe, text="Update", font="arial 12 bold", width=10, height=1, bg='lightgreen', command=self.update2)
        self.update.place(x=25, y=380)  # Adjusted the position of the "Update" button

        self.updateframe.pack()

    def update2(self):
        self.var1 = self.ent1.get()
        self.var2 = self.ent2.get()
        self.var3 = self.ent3.get()
        self.var4 = self.ent4.get()
        self.var5 = self.ent5.get()
        self.selected_doctor = self.doctor_combobox.get()

        query = "UPDATE appointments SET name=?, age=?, gender=?, location=?, phone=?, doctor=? WHERE id LIKE ?"
        c.execute(query, (self.var1, self.var2, self.var3, self.var4, self.var5, self.selected_doctor, self.idnet.get(),))
        conn.commit()
        tkinter.messagebox.showinfo("Updated", "Successfully Updated.")
        self.updateframe.destroy()
        self.__init__(self.window)
        self.updatee()
        self.updateframe.pack()

# ... (rest of the code) ...
