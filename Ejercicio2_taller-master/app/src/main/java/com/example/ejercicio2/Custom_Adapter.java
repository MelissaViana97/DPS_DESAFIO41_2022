package com.example.ejercicio2;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.TextureView;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.List;

public class Custom_Adapter extends BaseAdapter {
    Context context;
    List<Planetas> lst;

    public Custom_Adapter(Context context, List<Planetas> lst) {
        this.context = context;
        this.lst = lst;
    }

    @Override
    public int getCount() {
        return lst.size();
    }

    @Override
    public Object getItem(int i) {
        return i;
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        ImageView imageViewMercurio;
        TextView TextViewNombre;
        TextView TextViewDes;

        Planetas c=lst.get(i);

        if (view==null)
            view= LayoutInflater.from(context).inflate(R.layout.listviewplaneta,null);
        imageViewMercurio=view.findViewById(R.id.imageViewMercurio);
         TextViewNombre=view.findViewById(R.id.textViewNombre);
        TextViewDes = view.findViewById(R.id.textViewDes);

        imageViewMercurio.setImageResource(c.imagen);
        TextViewNombre.setText(c.nombre);
        TextViewDes.setText(c.Des);

        return null;
    }
}
