package com.example.ejercicio2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    ListView ListViewPlanetas;
    List<Planetas> lst;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ListViewPlanetas =findViewById(R.id.ListViewPlanetas);
        Custom_Adapter adapter=new Custom_Adapter(this,GetData());
        ListViewPlanetas.setAdapter(adapter);

        ListViewPlanetas.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                Planetas c=lst.get(i);
                Toast.makeText(getBaseContext(),c.nombre,Toast.LENGTH_SHORT).show();
            }
        });
    }


   private List<Planetas> GetData() {
    lst=new ArrayList<>();
        lst.add(new Planetas(1,R.drawable.mercurio,"mercurio","734774576547"));
        lst.add(new Planetas(2,R.drawable.venus,"venus","734774576547"));
        lst.add(new Planetas(3,R.drawable.tierra,"tierra","734774576547"));
        lst.add(new Planetas(4,R.drawable.estacion,"estacion","734774576547"));
        lst.add(new Planetas(5,R.drawable.luna,"luna","734774576547"));
        lst.add(new Planetas(6,R.drawable.marte,"marte","734774576547"));
        lst.add(new Planetas(7,R.drawable.ceres,"ceres","734774576547"));
       lst.add(new Planetas(8,R.drawable.lo,"lo","734774576547"));
       lst.add(new Planetas(9,R.drawable.europa,"europa","734774576547"));

        return lst;
    }
}